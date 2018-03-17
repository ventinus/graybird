# frozen_string_literal: true

Listing.delete_all

## Listings
puts "  - Listings"
current_images = %x(ls ./public/uploads/store).split("\n")
neighborhoods = Neighborhood.all

10.times do |i|
  listing = Listing.create(
    property_type: ['detached', 'condo', 'townhouse'].sample,
    rmls_number: rand(10000000..20000000),
    role: ['buyer_agent', 'listing_agent'].sample,
    price: rand(300000..800000),
    address: Faker::Address.street_address,
    zip: Faker::Address.zip,
    city: Faker::Address.city,
    state: 'OR',
    status: ['active', 'bumpable', 'canceled', 'expired', 'pending', 'sold', 'sold_not_listed', 'withdrawn'].sample,
    bedrooms: rand(1..4),
    bathrooms: rand(1..3),
    description: Faker::Lorem.paragraphs(2),
    neighborhood: neighborhoods.sample,
    property_taxes: rand(3000..5000),
    garage_size: rand(0..2),
    garage_type: ['garage_attached', 'garage_detached', 'carport', 'garage_shared', 'no_garage', nil].sample,
    heating: ['forced_air', nil].sample,
    cooling: ['central_air', 'window', 'no_cooling', nil].sample,
    sewer: ['sewer_public', 'septic', 'cesspool', 'party_line', nil].sample,
    sq_feet: rand(900..4000)
  )

  3.times do |j|
    puts "    - Seeding listing photo #{j + 1}"
    if current_images.present?
      photo = use_local_image(current_images[(i * 3) + j])
      photo.listing = listing
      photo.save
    else
      listing_photo listing
    end
  end
end
