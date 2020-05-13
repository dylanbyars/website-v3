const env = process.env.NODE_ENV || 'development'

require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: `Dylan Byars · Portfolio`,
    description: `yowza`,
    author: `dylan`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.BUCKET_NAME,
      },
    },
  ],
}
