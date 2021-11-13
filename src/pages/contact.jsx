import React, { useState } from "react"
import Layout from "../components/Layout"

const Contact = () => {
  const [submits, setSubmits] = useState([])
  const handleSubmit = e => {
    // e.preventDefault()
    // setSubmits([
    //   ...submits,
    //   {
    //     name: e.target.name.value,
    //     age: e.target.age.value,
    //     id: Math.random(),
    //   },
    // ])
  }

  return (
    <Layout>
      <h1>This is Contact page</h1>
      {/* <form name="contact" method="POST" data-netlify="true">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Submit</button>
      </form> */}
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <ul>
        {submits.map((submit, index) => (
          <li key={submit.id}>
            {index}
            <ul>
              <li>name - {submit.name}</li>
              <li>age - {submit.age}</li>
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Contact
