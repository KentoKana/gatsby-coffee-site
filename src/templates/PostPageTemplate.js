import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "../components/image"
import RelevantPosts from "../components/relevantPosts"
import SEO from "../components/seo"

import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/post-page.scss"
const CoffeeDrinkTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { allPagesJson } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <StyleRoot>
        <section className="post-page">
          <div className="post-page__image-container" style={animations.fadeIn}>
            <Image
              className="post-page__feature-image"
              filename={frontmatter.featureImage}
              alt={frontmatter.title}
            />
            <h1 className="post-page__heading" style={animations.fadeInRight}>
              {frontmatter.title}
            </h1>
          </div>
          <div className="container">
            <div
              className="post-page__content"
              style={animations.fadeInLeft}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <RelevantPosts data={data} style={animations.slideInUp} />
          </div>
          <div className="container post-page__link-container">
            {allPagesJson.edges.length !== 0 ? (
              <Link to={allPagesJson.edges[0].node.path}>Back To List</Link>
            ) : (
              <></>
            )}
          </div>
        </section>
      </StyleRoot>
    </Layout>
  )
}

export const postPageQuery = graphql`
  query($path: String!, $postType: String!) {
    allPagesJson(filter: { postType: { eq: $postType, ne: "page" } }) {
      edges {
        node {
          path
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featureImage
        postType
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { postType: { eq: $postType }, path: { ne: $path } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            postType
          }
        }
      }
    }
  }
`

export default CoffeeDrinkTemplate
