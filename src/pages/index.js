// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle = "Welcome bij Omni Vrembo">
      <p>Lorem ipsum</p>
      </Layout>
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
