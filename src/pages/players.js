import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const PlayersPage = ({data: {allWpPlayer: {edges}}}) => {
  return (
    <Layout pageTitle="Spelers van Omni Vrembo">
      {edges.map((item) => {
          const player = item.node.playerMeta;
          return <p key={item.node.id}>{player.personal.familyname} {player.personal.firstname} {player.capabilities.ranking}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
    query {
        allWpPlayer {
            edges {
                node {
                    playerMeta {
                        personal {
                            familyname
                            firstname
                        }
                        capabilities {
                            ranking
                        }
                    }
                }
            }
        }
    }
`

export default PlayersPage