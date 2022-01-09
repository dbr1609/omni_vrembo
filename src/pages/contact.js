import * as React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import {
    header,
    headerInfo,
    headerPicture,
    subtitle,
    clubInfo,
    socials,
    facebook,
    link,
  } from "../page.module.css"

// Step 2: Definieer je component
const ContactPage = ({
    data: {
        wpPage: {
            contactPage: { clubInformation, headerContact},
        },
    },
}) => {
    const image = getImage(headerContact.picture.localFile)

    return (
        <Layout>
            <div className={header}>
                <div className={headerInfo}>
                    <h2 className={subtitle}> {headerContact.title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: headerContact.description,
                        }}
                    />
                    <div className={clubInfo}>
                        <a className={link} href={`mailto:${clubInformation.email}`}>
                            {clubInformation.email}
                        </a>
                        <a className={link} href={`tel:${clubInformation.phoneNumber}`}>
                            {clubInformation.phoneNumber}
                        </a>
                        <p>{`${clubInformation.address}, ${clubInformation.postcode} ${clubInformation.city}`}</p>
                        <div className={socials}>
                            Follow us:
                            <a
                                target="__blank"
                                className= {facebook}
                                href={clubInformation.facebook}>
                                    {" "}
                            </a>
                        </div>
                    </div>
                </div>
                <GatsbyImage
                    image={image}
                    className={headerPicture}
                    alt={headerContact.picture.altText} />
            </div>
        </Layout>
    )
}

// Stap 3: Exporteer je component
export default ContactPage

export const query = graphql`
  query {
    wpPage(slug: {eq: "contact"}) {
        contactPage {
          headerContact {
            description
            title
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          clubInformation {
            address
            postcode
            city
            email
            phoneNumber
            facebook
          }
        }
      }
    }
`