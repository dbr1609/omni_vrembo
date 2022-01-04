import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    playerInfo,
    playerName,
    fullName,
} from "./player.module.css"

export const Player = ({ player, slug }) => {
  const profile = getImage(player.playerMeta.profilePicture.localFile)
  return (
    <Link
        className={wrapper}
        to={slug}
    >
      <GatsbyImage
        className={image}
        image={profile}
        alt={player.playerMeta.profilePicture.altText}
      />
      <div className={playerInfo}>
        {player.playerMeta.firstName && (<p className={playerName}>{player.playerMeta.firstName}</p>)}
        <p className={fullName}>
          {player.playerMeta.firstName} {player.playerMeta.familyName}
        </p>
      </div>
    </Link>
  )
}

export default Player;