# frozen_string_literal: true

Administrator.delete_all
Region.delete_all
Neighborhood.delete_all
School.delete_all
Listing.delete_all

puts "  - Loading..."

## Administrators
puts "  - Administrators"
Administrator.create({
  first_name: 'jon',
  last_name: 'gray',
  email: 'jgray@graybirdproperties.com',
  password: 'password',
  confirmed_at: Time.zone.now
})

## Regions
puts "  - Regions"
regions = Region.create([
  { name: 'North' },
  { name: 'Northwest' },
  { name: 'Northeast' },
  { name: 'Southwest' },
  { name: 'Southeast' }
])

## Neighborhoods
puts "  - Neighborhoods"
10.times do
  Neighborhood.create(name: Faker::Address.community, region: regions.sample)
end

sleep 1

neighborhoods = Neighborhood.all

## Schools
puts "  - Schools"
schools = School.create([
  {
    name: 'Abernethy (K-5)',
    kind: 'elementary',
    address: '2421 SE Orange Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97214',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Access',
    kind: 'programs_alternatives',
    address: '2334 NE 57th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97213',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Ainsworth E.S.',
    kind: 'elementary',
    address: '2425 SW Vista St',
    city: 'Portland',
    state: 'OR',
    zip: '97201',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Alameda E.S.',
    kind: 'elementary',
    address: '2732 NE Fremont St',
    city: 'Portland',
    state: 'OR',
    zip: '97212',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Alliance H.S. @ Benson Campus',
    kind: 'programs_alternatives',
    address: '546 NE 12th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97232',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Alliance H.S. @ Meek Campus',
    kind: 'programs_alternatives',
    address: '4039 NE Alberta Ct',
    city: 'Portland',
    state: 'OR',
    zip: '97211',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Arleta K-8',
    kind: 'k_8',
    address: '5109 SE 66th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97206',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Astor K-8',
    kind: 'k_8',
    address: '5601 N Yale St',
    city: 'Portland',
    state: 'OR',
    zip: '97203',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Atkinson E.S.',
    kind: 'elementary',
    address: '5800 SE Division St',
    city: 'Portland',
    state: 'OR',
    zip: '97206',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Beach K-5',
    kind: 'k_5',
    address: '1710 N Humboldt St',
    city: 'Portland',
    state: 'OR',
    zip: '97217',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Beaumont M.S.',
    kind: 'middle',
    address: '4043 NE Fremont St',
    city: 'Portland',
    state: 'OR',
    zip: '97212',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Benson Polytechnic H.S.',
    kind: 'high',
    address: '546 NE 12th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97232',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Beverly Cleary - Fernwood Campus',
    kind: 'elementary',
    address: '1915 NE 33rd Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97212',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Beverly Cleary - Hollyrood Campus',
    kind: 'kindergarten',
    address: '3560 NE Hollyrood Ct',
    city: 'Portland',
    state: 'OR',
    zip: '97212',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Boise-Eliot/Humboldt PK-8',
    kind: 'k_8',
    address: '620 N Fremont St',
    city: 'Portland',
    state: 'OR',
    zip: '97227',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Bridger K-8',
    kind: 'k_8',
    address: '7910 SE Market St',
    city: 'Portland',
    state: 'OR',
    zip: '97215',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Bridlemile E.S.',
    kind: 'elementary',
    address: '4300 SW 47th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97221',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Buckman E.S.',
    kind: 'elementary',
    address: '320 SE 16th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97214',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Capitol Hill E.S.',
    kind: 'elementary',
    address: '8401 SW 17th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97219',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Cesar Chavez K-8',
    kind: 'k_8',
    address: '5103 N Willis Blvd',
    city: 'Portland',
    state: 'OR',
    zip: '97203',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Chapman @ The Ramona',
    kind: 'kindergarten',
    address: '1545 NW 13th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97209',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Chapman E.S.',
    kind: 'elementary',
    address: '1445 NW 26th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97210',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Chief Joseph Elementary K-5',
    kind: 'k_5',
    address: '2409 N Saratoga St',
    city: 'Portland',
    state: 'OR',
    zip: '97217',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Cleveland H.S.',
    kind: 'high',
    address: '3400 SE 26th Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97202',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Creative Science K-8',
    kind: 'k_8',
    address: '1231 SE 92nd Ave',
    city: 'Portland',
    state: 'OR',
    zip: '97216',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Creston K-8',
    kind: 'k_8',
    address: '4701 SE Bush St',
    city: 'Portland',
    state: 'OR',
    zip: '97206',
    neighborhood: neighborhoods.sample
  }, {
    name: 'DaVinci Arts M.S.',
    kind: 'middle',
    address: '2508 NE Everett St',
    city: 'Portland',
    state: 'OR',
    zip: '97232',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Duniway E.S.',
    kind: 'elementary',
    address: '7700 SE Reed College Pl',
    city: 'Portland',
    state: 'OR',
    zip: '97202',
    neighborhood: neighborhoods.sample
  }, {
    name: 'Faubion PK-8',
    kind: 'k_8',
    address: '2930 NE Dekum Street',
    city: 'Portland',
    state: 'OR',
    zip: '97211',
    neighborhood: neighborhoods.sample
  }
])

30.times do
  Listing.create(
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
    neighborhood: neighborhoods.sample
  )
end


# Drawing.create({
#   date: Date.new(2017, 10, 25),
#   gain: 4,
#   loss: 6,
#   numbers: '18 22 29 54 57 8',
#   tickets: tickets1
# })
