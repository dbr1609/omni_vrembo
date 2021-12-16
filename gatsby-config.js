module.exports = {
  siteMetadata: {
    title: "Omni Vrembo",
    description: "Wij zijn tafeltennisclub Omni Vrembo, zoals de naam het al zegt een club in de gemeentes Vremde en Boechout.",
    author: "@dbr1609",
    siteUrl: "https://www.omnivrembo.be/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "https://omnivrembo.be/new/graphql/",
      },
    },
  ],
};