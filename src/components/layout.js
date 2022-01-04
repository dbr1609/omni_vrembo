import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from "./footer"
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle 
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: {eq: "contact-us"}) {
        contactPage {
          clubInformation {
            address
            city
            postcode
            facebook
          }
        }
      }
    }
  `)

  return (
    <>
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitle}>
          {data.site.siteMetadata.title}
        </header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/players">
              Players
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        clubInformation={data.wpPage.contactPage.clubInformation}
      />
    </>
  )
}

export default Layout