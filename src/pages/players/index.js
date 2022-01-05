import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Player from "../../components/player"
import {
    playersPicture,
    section,
    subtitle,
    players,
    description,
} from "../../page.module.css"

const PlayersPage = ({
    data: {
        allWpPlayer: {edges: playersInfo},
        wpPage: {playersPage},
    },
}) => {
    const image = getImage(playersPage.headerPlayers.picture.localFile)
  return (
    <Layout pageTitle="Spelers van Omni Vrembo">
        <GatsbyImage
            className={playersPicture}
            image={image}
            alt={playersPage.headerPlayers.picture.altText}
        />
        <div className={section}>
            <h2 className={subtitle}> {playersPage.headerPlayers.title}</h2>
            <div
                className={description}
                dangerouslySetInnerHTML={{
                    __html: playersPage.headerPlayers.description,
                }}
            />
            <div className={players}>
                {playersInfo.map(({ node: player}) => (
                    <Player key={player.id} slug={player.slug} player={player} />
                ))}
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        wpPage(slug: {eq: "players"}) {
            playersPage {
              headerPlayers {
                description
                title
                picture {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
                    }
                  }
                  altText
                }
              }
            }
        }
        allWpPlayer {
            edges {
              node {
                playerMeta {
                  personal {
                    firstname
                    familyname
                  }
                  capabilities {
                    ranking
                  }
                  profilePicture {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                      }
                    }
                    altText
                  }
                }
                id
                slug
              }
            }
        }
    }
`

export default PlayersPage