import React from 'react'

import Layout from '../components/layout'

import './home.scss';

import baby from '../images/baby.jpg';
import coupleBeach from '../images/couple-on-beach.jpg';
import funeral from '../images/funeral.jpg';

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Janne Martin - Civil Celebrant</h1>
      <blockquote>Your Ceremony, Your Way</blockquote>
    </div>
    <div className="service-blocks">
      <div className="block">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1463579934088-98fe605ed062?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=975d59e604cda85412bc6e0088e8ee46&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <h2>Wedding Celebrant</h2>
        <p>With years of experience, I look forward to making this day everything you ever dreamed it would be.</p>
      </div>
      <div className="block right">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9699a304159246af55ed7002f6ef7f8a&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <h2>Commitment Ceremonies</h2>
        <p>I am delighted to be able to carry out Commitment Ceremonies for couples who share a life together and want the world to know.</p>
      </div>
      <div className="block">
        <img src={baby} alt="Photo of 2 hands holding a newborn baby's foot" />
        <h2>Naming Services</h2>
        <p>Are a very special way in which you and your family can express your love and commitment to your children.</p>
      </div>
      <div className="block right">
        <img src={coupleBeach} alt="Photo of a young barefoot couple walking down the beach, the man is wearing white pants and a dress shirt and the woman is wearing a wedding dress and holding it up out of the sand" />
        <h2>Renew Vows</h2>
        <p>A Renewal of Vows ceremony is something that can be extremely special whether you have been married 50 years, 25 years or perhaps even one year.</p>
      </div>
      <div className="block">
        <img src={funeral} alt="Photo of the hand of a woman wearing a black dress with a red rose and a coffin with roses on it in the background" />
        <h2>Funeral Celebrant</h2>
        <p>With compassion and attention to detail, I will ensure your loved ones are remembered as they deserve to be.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
