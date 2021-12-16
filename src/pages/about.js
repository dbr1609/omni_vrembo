// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Definieer je component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Us">
        <p>Wij zijn tafeltennisclub Omni Vrembo, zoals de naam het al zegt een club in de gemeentes Vremde en Boechout. We zijn aangesloten bij het sporta verbond. Verdere informatie vinden jullie bij het rubriekje praktische info.</p>
      </Layout>
    </main>
  )
}

// Stap 3: Exporteer je component
export default AboutPage