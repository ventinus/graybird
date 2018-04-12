import gql from 'graphql-tag'
import {capitalize} from 'lodash'

const allListingPhotoFields = 'id, url, caption'
const allSchoolFields = 'id, name, kind'
const allErrorFields = 'column, messages'
const allListingFields = `id, property_type, rmls_number, role, price, address, full_address, unit, zip, city, state, city_state_zip, status, bedrooms, bathrooms, description, sq_feet, year_built, garage_size, garage_type, water, sewer, hot_water, heating, cooling, property_taxes, hoa_dues, hoa_frequency, community_description, created_at, updated_at, neighborhood, schools { ${allSchoolFields} }, photos { ${allListingPhotoFields} }, primary_photo { ${allListingPhotoFields} }`
const allClientFields = `id, full_name, first_name, last_name, phone_number, email, preferred_communication, price_min, price_max, notes, confirmed, contacted, message`

// ---------------------------------------------------
// General
// ---------------------------------------------------
// ----- Queries -------

// ----- Mutations -------
export const destroyResourceItems = () => gql`
  mutation DestroyResourceItems($resource: String!, $ids: [ID!]!) {
    destroy_resource_items(resource: $resource, ids: $ids)
  }
`

// ---------------------------------------------------
// Listings
// ---------------------------------------------------
// ----- Queries -------
export const getListings = (fields = allListingFields) => {
  return gql`query Listings { listings { ${fields} } }`
}

export const getListing = (fields = allListingFields) => {
  return gql`query Listing($id: ID, $rmls_number: Int, $address: String, $unit: String) {
    listing(id: $id, rmls_number: $rmls_number, address: $address, unit: $unit) { ${fields} }
  }`
}

// export const getNewListing = () => gql`
//   query NewListing { new_listing { ${allListingFields} } }
// `

// ----- Mutations -------
const modListing = method => (fields = allListingFields) => {
  return gql`mutation ${capitalize(method)}Listing($id: ID, $property_type: String, $rmls_number: Int, $role: String, $price: Int, $address: String, $unit: String, $zip: String, $city: String, $state: String, $status: String, $bedrooms: Int, $bathrooms: Float, $description: String, $sq_feet: Int, $year_built: String, $garage_size: Int, $garage_type: String, $water: String, $sewer: String, $hot_water: String, $heating: String, $cooling: String, $property_taxes: Float, $hoa_dues: Int, $hoa_frequency: String, $community_description: String, $neighborhood: String) {
      ${method}_listing: ${method}_listing(id: $id, property_type: $property_type, rmls_number: $rmls_number, role: $role, price: $price, address: $address, unit: $unit, zip: $zip, city: $city, state: $state, status: $status, bedrooms: $bedrooms, bathrooms: $bathrooms, description: $description, sq_feet: $sq_feet, year_built: $year_built, garage_size: $garage_size, garage_type: $garage_type, water: $water, sewer: $sewer, hot_water: $hot_water, heating: $heating, cooling: $cooling, property_taxes: $property_taxes, hoa_dues: $hoa_dues, hoa_frequency: $hoa_frequency, community_description: $community_description, neighborhood: $neighborhood) { ${fields}, errors { ${allErrorFields} } }
  }`
}

export const createListing = modListing('create')
export const updateListing = modListing('update')

// ---------------------------------------------------
// Clients
// ---------------------------------------------------
// ----- Queries -------
export const getClients = (fields = allClientFields) => {
  return gql`query Clients { clients { ${fields} } }`
}

export const getClient = (fields = allClientFields) => {
  return gql`query Client($id: ID) {
    client(id: $id) { ${fields} }
  }`
}

// ----- Mutations -------
export const createClient = (fields = allClientFields) => {
  return gql`mutation CreateClient($first_name: String, $last_name: String, $phone_number: String, $email: String, $message: String) {
    create_client(first_name: $first_name, last_name: $last_name, phone_number: $phone_number, email: $email, message: $message) { ${fields} }
  }`
}
