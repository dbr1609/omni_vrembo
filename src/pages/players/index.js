import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
const PlayersPage = ({data: {allWpPlayer: {edges}}}) => {
  return (
    <Layout pageTitle="Spelers van Omni Vrembo">
      {edges.map((item) => {
            const player = item.node.playerMeta;
            const slug = item.node.slug;
            return <Link to={`/players/${slug}`}>
                <p key={item.node.id}>{player.personal.familyname} {player.personal.firstname} {player.capabilities.ranking}</p>
            </Link>
      })}
    </Layout>
  )
}

export const query = graphql`
    query {
        allWpPlayer {
            edges {
                node {
                    id
                    slug
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