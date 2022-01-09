import * as React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  header,
  headerInfo,
  detailPicture,
  fullName,
  playerCharacteristics,
  playerHistory,
  playerInfo,
} from "../../page.module.css"
//import './styles.css'

  const PlayerPage = ({
    data: {
      wpPlayer: {
        playerMeta: player,
        characteristics: {nodes: characteristics},
      },
    },
  }) => {
    const image = getImage(player.profilePicture.localFile)
    return (
      <Layout pageTitle="Players Template">
        <h1 className={fullName}>{player.personal.firstname} {player.personal.familyname}</h1>
        <div classname={playerCharacteristics}>
            {characteristics.map((characteristic, i) => (
              <span key={i}>
                {characteristic.name} {i + 1 < characteristics.length && "- "}
              </span>
            ))}
          </div>
        <div className={header}>
          <div classname={headerInfo}>

          <h3>Persoonlijke info</h3>
          <p><span className={playerInfo}>Voornaam:</span> {player.personal.firstname}</p>
          <p><span className={playerInfo}>Achternaam:</span> {player.personal.familyname}</p>
          <p><span className={playerInfo}>Geslacht:</span> {player.personal.sex}</p>
          <p><span className={playerInfo}>Geboortedatum:</span> {player.personal.dateOfBirth}</p>
          <h3>Contactinformatie</h3>
          <p><span className={playerInfo}>straat:</span> {player.contact.street} {player.contact.houseNumber} {player.contact.box}</p>
          <p><span className={playerInfo}>Gemeente:</span> {player.contact.postalCode} {player.contact.city}</p>
          <p><span className={playerInfo}>E-mail:</span> {player.contact.emailaddress}</p>
          <p><span className={playerInfo}>Telefoonnummer:</span> {player.contact.phoneNumber}</p>
          <h3>Tafeltennis info</h3>
          <p><span className={playerInfo}>Klassement:</span> {player.capabilities.ranking}</p>
          <h5>Voorhandslagen</h5>
          <p><span className={playerInfo}>Contra:</span> {player.capabilities.forehandStrokes.contraForehand}/10</p>
          <p><span className={playerInfo}>Topspin:</span> {player.capabilities.forehandStrokes.topspinForehand}/10</p>
          <p><span className={playerInfo}>Duw:</span> {player.capabilities.forehandStrokes.pushForehand}/10</p>
          <p><span className={playerInfo}>Flip:</span> {player.capabilities.forehandStrokes.flipForehand}/10</p>
          <p><span className={playerInfo}>Smash:</span> {player.capabilities.forehandStrokes.smashForehand}/10</p>
          <h5>Rughandslagen</h5>
          <p><span className={playerInfo}>Contra:</span> {player.capabilities.backhandStrokes.contraBackhand}/10</p>
          <p><span className={playerInfo}>Topspin:</span> {player.capabilities.backhandStrokes.topspinBackhand}/10</p>
          <p><span className={playerInfo}>Duw:</span> {player.capabilities.backhandStrokes.pushBackhand}/10</p>
          <p><span className={playerInfo}>Flip:</span> {player.capabilities.backhandStrokes.flipBackhand}/10</p>
          <p><span className={playerInfo}>Smash:</span> {player.capabilities.backhandStrokes.smashBackhand}/10</p>
          </div>
          <div>
          <GatsbyImage
            className={detailPicture} 
            image={image}
            alt={player.profilePicture.altText}
          />
          <div
            className={playerHistory}
            dangerouslySetInnerHTML={{ __html: player.history }}
          />
          </div>
          
          </div>
      </Layout>
    )
  }

export const query = graphql`
  query MyQuery ($id: String) {
    wpPlayer (id: {eq: $id}) {
      playerMeta {
        history
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
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
      characteristics {
        nodes {
          name
        }
      }
    }
  }
`

export default PlayerPage