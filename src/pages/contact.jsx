import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <h1>This is Contact page</h1>
      <form action="https://formspree.io/f/xleaqjln" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default Contact
