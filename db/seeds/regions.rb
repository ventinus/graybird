# frozen_string_literal: true

Region.delete_all

## Regions
puts "  - Regions"
Region.create([
  { name: 'North' },
  { name: 'Northwest' },
  { name: 'Northeast' },
  { name: 'Southwest' },
  { name: 'Southeast' }
])
