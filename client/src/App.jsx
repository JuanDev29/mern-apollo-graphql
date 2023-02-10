import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { ProjecDetails } from './pages/ProjecDetails'
import { Projects } from './pages/Projects'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to='/projects' /> }/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<ProjecDetails/>}/>
      </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App