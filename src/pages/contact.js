import React from 'react'

import Layout from '../components/layout'

import './contact.scss'

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">
          Name
          <input type="text" name="name"/>
      </label>
      <label htmlFor="email">
          Email Address
          <input type="email" name="email"/>
      </label>
      <label htmlFor="phone">
          Contact Number
          <input type="text" name="phone" />
      </label>
      <label htmlFor="date">
          Service Date and Time
          <input type="text" name="date"/>
      </label>
      <label htmlFor="location">
          Service Location
          <input type="text" name="location"/>
      </label>
      <label htmlFor="message">
          Notes
          <textarea name="message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </Layout>
)

export default Contact
