import { gql,useQuery } from "@apollo/client"

// components
import Header from "./component/Header"

const QUERY = gql`
    query {
        authors {name}
    }
`

function App() {
  return (
    <>
    <Header />
    </>
  )
}

export default App
