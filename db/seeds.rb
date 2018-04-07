# frozen_string_literal: true

# load files in dependency order
files = ['administrators', 'regions', 'neighborhoods', 'listings', 'schools', 'clients'].map do |filename|
  File.join(Rails.root, 'db', 'seeds', "#{filename}.rb")
end

IMAGES = (1..1055).to_a

def unique_image
  IMAGES.delete(IMAGES.sample)
end

def fetch_image
  begin
    open "https://unsplash.it/1365/1024?image=#{unique_image}"
  rescue
    retry while true
  end
end

def listing_photo(listing)
  lp = ListingPhoto.create(listing: listing)
  lp.file.attach(io: fetch_image, filename: 'seed.jpg', content_type: 'image/jpg')
end

def use_local_image(filename)
  binding.pry
  # uploader = ImageUploader.new(:store)
  # file = File.new(Rails.root.join("public/uploads/store/#{filename}"))
  # uploaded_file = uploader.upload(file)
  # ListingPhoto.new(image_data: uploaded_file.to_json)
end

def rand_boolean
  [true, false].sample
end

puts "  - Loading..."

# remove all previously stored assets
# system('rm ./public/uploads/store/*')

Dir[*files].each do |seed|
  load seed
end
