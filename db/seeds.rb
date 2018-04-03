# frozen_string_literal: true

# load files in dependency order
# files = ['administrators', 'regions', 'neighborhoods', 'listings', 'schools', 'clients'].map do |filename|
files = ['clients'].map do |filename|
  File.join(Rails.root, 'db', 'seeds', "#{filename}.rb")
end

IMAGES = (1..1055).to_a

def listing_photo(listing)
  ListingPhoto.create(image_data: fetch_image, listing: listing)
end

def fetch_asset(url)
  uploader = ImageUploader.new(:store)
  file = open(url)
  uploader.upload(file).to_json
end

def fetch_image
  begin
    fetch_asset "https://unsplash.it/1365/1024?image=#{unique_image}"
  rescue
    retry while true
  end
end

def unique_image
  IMAGES.delete(IMAGES.sample)
end

def use_local_image(filename)
  uploader = ImageUploader.new(:store)
  file = File.new(Rails.root.join("public/uploads/store/#{filename}"))
  uploaded_file = uploader.upload(file)
  ListingPhoto.new(image_data: uploaded_file.to_json)
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
