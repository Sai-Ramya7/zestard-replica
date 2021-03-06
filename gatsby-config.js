module.exports = {
  siteMetadata: {
    title: `Zestard Technologies`,
    description: `Offshore Website Design & Development Company | Zestard Technologies`,
    author: `zestard`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zestard-technology`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1F98EA`,
        theme_color: `#1F98EA`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "https://postyoulike.com/zestard",
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        auth: {
          wpcom_user: "mywp",
          wpcom_pass: '$m@r+(wp)',
        },
        useACF: true,
        perPage: 100,
        concurrentRequests: 10,
        keepMediaSizes: false,
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
        rel: "nofollow"
      }      
    }
  ],
}
