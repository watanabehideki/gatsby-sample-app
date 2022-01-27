module.exports = {
  /* 共通のメタデータ */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://jovial-tesla-1f1cad.netlify.app`,
    location: `ja_JP`,
    fbappid: `XXXX`,
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
    `gatsby-plugin-react-helmet`,
    /* PWA対応 */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`, //アプリ名
        short_name: `ESSENTIALS`, //アプリの短縮名
        start_url: `/`, //アプリ開始URL
        background_color: `#ffffff`, //起動時の背景色
        theme_color: `#477294`, //テーマカラー
        display: `standalone`, //アプリの表示モード
        icon: `src/images/icon.png`, //アプリのアイコン
      },
    },
    `gatsby-plugin-offline`,
  ],
}
