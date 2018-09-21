import React from 'react'

import Layout from '../components/layout'

import './contact.scss'

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <div className="split">
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
                Name *
                <input type="text" name="name" required />
            </label>
            <label htmlFor="email">
                Email Address *
                <input type="email" name="email" required />
            </label>
            <label htmlFor="phone">
                Contact Number
                <input type="text" name="phone" />
            </label>
            <label htmlFor="date">
                Service Date & Time *
                <input type="text" name="date" required />
            </label>
            <label htmlFor="location">
                Service Location *
                <input type="text" name="location" required />
            </label>
            <label htmlFor="message">
                Notes
                <textarea name="message" rows="8"></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
        <div>
            <iframe src="//mapkit.io/embed/jIVAMV" height="400" width="600"></iframe>
            <p><strong>Phone: </strong> <a href="tel:+61894018427" target="_blank">08 9401 8427</a></p>
            <p><strong>Mobile: </strong> <a href="tel:+61418955198" target="_blank">0418 955 198</a></p>
        </div>
    </div>
  </Layout>
)

export default Contact
