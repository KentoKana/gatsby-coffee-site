import React from "react"
import { Link } from "gatsby"
import { StyleRoot } from "radium"

import "../styles/partials/_relevant-posts.scss"

const RelevantPosts = ({ data, style }) => {
  if (data) {
    return (
      <StyleRoot>
        <aside className="post-page__relevant-posts" style={style}>
          <h2>Relevant Posts</h2>
          <ul className="post-page__relevant-posts-list">
            {data.allMarkdownRemark.edges.map((post, index) => {
              return (
                <li className="post-page__relevant-post-list-item" key={index}>
                  <Link
                    className="post-page__relevant-post-link"
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </StyleRoot>
    )
  } else {
    return <></>
  }
}

export default RelevantPosts
