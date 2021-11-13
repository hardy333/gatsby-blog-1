import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Posts = ({ data }) => {
  const mdxNodes = data.allMdx.nodes
  return (
    <Layout>
      <h1>My Blog Posts</h1>
      {mdxNodes.map(mdxNode => (
        <article key={mdxNode.id}>
          <Link to={"/" + mdxNode.frontmatter.name}>
            <h2>{mdxNode.frontmatter.name}</h2>
          </Link>
          <p>{mdxNode.frontmatter.data}</p>
        </article>
      ))}
    </Layout>
  )
}

export default Posts

export const query = graphql`
  {
    allMdx {
      totalCount
      nodes {
        id
        frontmatter {
          data(fromNow: false)
          name
        }
      }
    }
  }
`
