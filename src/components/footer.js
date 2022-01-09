import React from "react"
import {
    wrapper,
    title,
  } from "./footer.module.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className={wrapper}>
      <div>
        <p className={title}>{siteTitle}</p>
        <p>All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer