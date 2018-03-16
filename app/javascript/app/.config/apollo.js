import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache({
    addTypename: true
  })
})

// client.query({
//   query: gql`
//     query MembersByPhone($phone_number: String!) {
//       members(phone_number: $phone_number) {
//         first_name,
//         last_name,
//         phone_number
//       }
//     }
//   `,
//   variables: {
//     phone_number: "6315555555"
//   }
// }).then(console.log)

export default client
