// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'
import Player from '../components/player'
import { graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  subtitle,
  players,
} from "../page.module.css"

// Stap 2: definieer je component
const IndexPage = ({
  data: {
    wpPage: {homePage},
  },
}) => {
  const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <main>
      <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>
            {homePage.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>
      <div>
        <h2 className={subtitle}>{homePage.featuredPlayers.title}</h2>
        <p>{homePage.featuredPlayers.description}</p>
        <div className={players}>
          {homePage.featuredPlayers.players.map(player => {
          return(<Player slug={`players/${player.slug}`} key={player.id} player={player} />)
          })}
      </div>
    </div>
  </Layout>
</main>
)}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
      callToAction {
        linkText
        link
      }
      featuredPlayers {
        players {
          ... on WpPlayer {
            id
            playerMeta {
              personal {
                firstname
                familyname
              }
              profilePicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                  }
                }
              }
            }
            slug
          }
        }
        description
        title
      }
    }
  }
}
`

// Stap 3: Exporteer je component
export default IndexPage
