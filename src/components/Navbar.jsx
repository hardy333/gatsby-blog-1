import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
      nodes {
        name
      }
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(query)
  const pageNodes = data.allFile.nodes
  return (
    <nav>
      <ul>
        {pageNodes.map(pageNode => {
          if (pageNode.name === "404") return

          let path = pageNode.name
          if (pageNode.name === "index" || pageNode.name === "home") {
            pageNode.name = "home"
            path = ""
          }

          return (
            <li key={pageNode.name}>
              <Link to={"/" + path}>{pageNode.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
