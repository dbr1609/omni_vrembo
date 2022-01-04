import React from "react"
import {
    wrapper,
    title,
    socials,
    facebook,
  } from "./footer.module.css"

const Footer = ({ siteTitle, clubInformation }) => {
  return (
    <div className={wrapper}>
      <div>
        <p className={title}>{siteTitle}</p>
        <p>All rights reserved</p>
      </div>
      <div>
        <p>{`${clubInformation.address}, ${clubInformation.postcode} ${clubInformation.city}`}</p>
        <div className={socials}>
          Follow us:
          <a
            className={facebook}
            target="__blank"
            href={clubInformation.facebook}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer