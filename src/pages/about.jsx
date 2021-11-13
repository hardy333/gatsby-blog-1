import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>This is about page</h1>
      <StaticImage src="../images/image-1.jpg" alt="abc" />
    </Layout>
  )
}

export default About
