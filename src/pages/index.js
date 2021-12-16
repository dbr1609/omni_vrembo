// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle = "Welcome bij Omni Vrembo">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Omni Vrembo"
        src="../images/omnivrembo.jpg"
      />
      </Layout>
    </main>
  )
}
// Stap 3: Exporteer je component
export default IndexPage
