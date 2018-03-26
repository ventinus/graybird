import gql from 'graphql-tag'

const allListingPhotoFields = 'id, url, caption'
const allSchoolFields = 'id, name, kind'
const allListingFields = `id, property_type, rmls_number, role, price, address, full_address, unit, zip, city, state, city_state_zip, status, bedrooms, bathrooms, description, sq_feet, year_built, garage_size, garage_type, water, sewer, hot_water, heating, cooling, property_taxes, hoa_dues, hoa_frequency, community_description, created_at, updated_at, neighborhood, schools { ${allSchoolFields} }, photos { ${allListingPhotoFields} }`
const allClientFields = `id, first_name, last_name, email, phone_number, message`

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


// Mutations
// _________________________________________________
export const createClient = (fields = allClientFields) => {
  return gql`mutation CreateClient($first_name: String, $last_name: String, $phone_number: String, $email: String, $message: String) {
    create_client(first_name: $first_name, last_name: $last_name, phone_number: $phone_number, email: $email, message: $message) { ${fields} }
  }`
}
