import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"

let prevButton, nextButton

const PostTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx
  const mdxNodes = data.allMdx.nodes

  const { name } = frontmatter
  const currIndex = mdxNodes.findIndex(node => node.frontmatter.name === name)
  console.log(currIndex)

  if (currIndex > 0) {
    prevButton = (
      <button className={`btn btn--prev ${currIndex <= 0 ? "disabled" : ""}`}>
        <Link to={"/" + mdxNodes[currIndex - 1].frontmatter.name}>{"<<"}</Link>
      </button>
    )
  }
  if (currIndex < mdxNodes.length - 1) {
    nextButton = (
      <button
        className={`btn btn--next ${
          currIndex >= mdxNodes.length - 1 ? "disabled" : ""
        }`}
      >
        <Link to={"/" + mdxNodes[currIndex + 1].frontmatter.name}>{">>"}</Link>
      </button>
    )
  }

  return (
    <Layout>
      <h1>{frontmatter.name}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <div className="button-container">
        {prevButton}
        {nextButton}
      </div>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query postTemplateQuery($name: String) {
    mdx(frontmatter: { name: { eq: $name } }) {
      body
      frontmatter {
        name
        data
      }
    }
    allMdx {
      nodes {
        frontmatter {
          name
        }
      }
    }
  }
`
