import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const PlayerPage = ({data: {wpPlayer: {playerMeta: player}}}) => {
  return (
    <Layout pageTitle="Players Template">
      <div>
        <h1>{player.personal.firstname} {player.personal.familyname}</h1>
        <h3>Persoonlijke info</h3>
        <p>Voornaam: {player.personal.firstname}</p>
        <p>Achternaam: {player.personal.familyname}</p>
        <p>Geslacht: {player.personal.sex}</p>
        <p>Geboortedatum: {player.personal.dateOfBirth}</p>
        <h3>Contactinformatie</h3>
        <p>straat: {player.contact.street} {player.contact.houseNumber} {player.contact.box}</p>
        <p>Gemeente: {player.contact.postalCode} {player.contact.city}</p>
        <p>E-mail: {player.contact.emailaddress}</p>
        <p>Telefoonnummer: {player.contact.phoneNumber}</p>
        <h3>Tafeltennis info</h3>
        <p>Klassement: {player.capabilities.ranking}</p>
        <h5>Opslag</h5>
        <p>Opslag: {player.capabilities.service}/10</p>
        <h5>Voorhandslagen</h5>
        <p>Contra: {player.capabilities.forehandStrokes.contraForehand}/10</p>
        <p>Topspin: {player.capabilities.forehandStrokes.topspinForehand}/10</p>
        <p>Duw: {player.capabilities.forehandStrokes.pushForehand}/10</p>
        <p>Flip: {player.capabilities.forehandStrokes.flipForehand}/10</p>
        <p>Smash: {player.capabilities.forehandStrokes.smashForehand}/10</p>
        <h5>Rughandslagen</h5>
        <p>Contra: {player.capabilities.backhandStrokes.contraBackhand}/10</p>
        <p>Topspin: {player.capabilities.backhandStrokes.topspinBackhand}/10</p>
        <p>Duw: {player.capabilities.backhandStrokes.pushBackhand}/10</p>
        <p>Flip: {player.capabilities.backhandStrokes.flipBackhand}/10</p>
        <p>Smash: {player.capabilities.backhandStrokes.smashBackhand}/10</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery ($id: String) {
    wpPlayer (id: {eq: $id}) {
      playerMeta {
        personal {
          familyname
          firstname
          dateOfBirth
          sex
        }
        contact {
          street
          houseNumber
          box
          postalCode
          city
          emailaddress
          phoneNumber
        }
        capabilities {
          forehandStrokes {
            contraForehand
            flipForehand
            pushForehand
            smashForehand
            topspinForehand
          }
          backhandStrokes {
            contraBackhand
            flipBackhand
            pushBackhand
            smashBackhand
            topspinBackhand
          }
          ranking
          service
        }
      }
    }
  }
`

export default PlayerPage