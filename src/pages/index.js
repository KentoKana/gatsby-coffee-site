import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  useStaticQuery(
    graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            title
          }
        }
        indexJson {
          bannerText
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.indexJson.bannerText}</h1>
      <div>
        {/* <Image alt={"hello"} filename={data.allAuthorJson.edges[0].node.bannerImage}/> */}
      </div>
    </Layout>
  )
}

export default IndexPage
