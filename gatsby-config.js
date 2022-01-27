module.exports = {
  /* 共通のメタデータ */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`
  },
  /* 画像最適化の設定 */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    /* メタデータの設定 */
    `gatsby-plugin-react-helmet`
  ],
}
