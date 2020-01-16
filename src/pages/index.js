import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/postCard"
import SEO from "../components/seo"
import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/index.scss"
import { node } from "prop-types"

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
          bannerHeading
        }
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                path
                featureImage
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index">
        <div className="index__container">
          <StyleRoot>
            <div className="container" style={animations.fadeInLeft}>
              {data.allMarkdownRemark.edges.map(post => (
                <React.Fragment key={node.id}>
                  <PostCard post={post} />
                </React.Fragment>
              ))}
            </div>
          </StyleRoot>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
