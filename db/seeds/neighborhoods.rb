# frozen_string_literal: true

Neighborhood.delete_all

## Neighborhoods
puts "  - Neighborhoods"
regions = Region.all

10.times do
  Neighborhood.create(name: Faker::Address.community, region: regions.sample)
end
