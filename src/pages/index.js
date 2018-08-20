import React from 'react'

import Layout from '../components/layout'

import './home.scss';

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Janne Martin - Civil Celebrant</h1>
      <blockquote>Your Ceremony, Your Way</blockquote>
    </div>
    <div className="service-blocks">
      <div className="block">
        <img src="https://placekitten.com/200/200" />
        <h2>Wedding Celebrant</h2>
        <p>With years of experience, I look forward to making this day everything you ever dreamed it would be.</p>
      </div>
      <div className="block right">
        <img src="https://placekitten.com/200/200" />
        <h2>Commitment Ceremonies</h2>
        <p>I am delighted to be able to carry out Commitment Ceremonies for couples who share a life together and want the world to know.</p>
      </div>
      <div className="block">
        <img src="https://placekitten.com/200/200" />
        <h2>Naming Services</h2>
        <p>Are a very special way in which you and your family can express your love and commitment to your children.</p>
      </div>
      <div className="block right">
        <img src="https://placekitten.com/200/200" />
        <h2>Renew Vows</h2>
        <p>A Renewal of Vows ceremony is something that can be extremely special whether you have been married 50 years, 25 years or perhaps even one year.</p>
      </div>
      <div className="block">
        <img src="https://placekitten.com/200/200" />
        <h2>Funeral Celebrant</h2>
        <p>With compassion and attention to detail, I will ensure your loved ones are remembered as they deserve to be.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
