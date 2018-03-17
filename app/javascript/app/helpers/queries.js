import gql from 'graphql-tag'

const allListingFields = 'id, property_type, rmls_number, role, price, address, full_address, unit, zip, city, state, city_state_zip, status, bedrooms, bathrooms, description, sq_feet, year_built, garage_size, garage_type, water, sewer, hot_water, heating, cooling, property_taxes, hoa_dues, hoa_frequency, community_description, created_at, updated_at, neighborhood, schools, photos'

// Queries
// _________________________________________________
export const getListings = (fields = allListingFields) => {
  return gql`query Listings { listings { ${fields} } }`
}

export const getListing = (fields = allListingFields) => {
  return gql`query GetListing($id: ID, $rmls_number: Int, $address: String, $unit: String) {
    listing(id: $id, rmls_number: $rmls_number, address: $address, unit: $unit) { ${fields} }
  }`
}
