import React from 'react'
import {Link} from 'gatsby'
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout'

import './home.scss';

const meta = {
	description: 'With years of experience helping to make each ceremony you have, a very special one to remember',
	slug: '/'
};

const IndexPage = ({data}) => {
  let images = {},
      imageData = data.allFile.edges;

  imageData.map((image) => {
    images[image.node.name] = image.node.childImageSharp.fixed;
  })

  return (
    <Layout home meta={meta}>
      <div className="banner">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Photo of a bride being walked down a large set of sandstone steps by her father, walking down the aisle lined with a long red carpet. It's outdoors and there are hedges and greenery all around."
          critical
        />
        <div className="text">
          <h1>Janne Martin - Registered Celebrant</h1>
          <blockquote>Your Ceremony, Your Way</blockquote>
        </div>
      </div>
      <div className="service-blocks">
        <div to="/weddings" className="block">
          <div className="image-container">
            <Img
              fixed={images.wedding_kingspark}
              alt="Photo of Janne holding a microphone for the bride who is saying her vows, the background is of the Swan River in Perth with part of Kings Park in the distance. The groom is also in the shot and is listening to the bride."
              Tag='figure'
            />
          </div>
          <h2>Wedding Celebrant</h2>
          <p>With years of experience, I look forward to making this day everything you ever dreamed it would be.</p>
          <Link className="btn secondary" to="/weddings">Find out More</Link>
        </div>
        <div to="/weddings/#commitment-ceremonies" className="block right">
          <Img
              fixed={images.rings}
              alt="Photo of 2 wedding rings sitting on top of a wedding bouquet of light pink roses"
              Tag='figure'
          />
          <h2>Commitment Ceremonies</h2>
          <p>I am delighted to be able to carry out Commitment Ceremonies for couples who share a life together and want the world to know.</p>
          <Link className="btn secondary" to="/weddings/#commitment-ceremonies">Find out More</Link>
        </div>
        <div to="/other-services/#naming-services" className="block">
          <Img
              fixed={images.baby}
              alt="Photo of 2 hands holding a newborn baby's foot"
              Tag='figure'
          />
          <h2>Naming Services</h2>
          <p>Are a very special way in which you and your family can express your love and commitment to your children.</p>
          <Link className="btn secondary" to="/other-services/#naming-services">Find out More</Link>
        </div>
        <div to="/weddings/#renew-vows" className="block right">
          <Img
              fixed={images['couple-on-beach']}
              alt="Photo of a young barefoot couple walking down the beach, the man is wearing white pants and a dress shirt and the woman is wearing a wedding dress and holding it up out of the sand"
              Tag='figure'
          />
          <h2>Renew Vows</h2>
          <p>A Renewal of Vows ceremony is something that can be extremely special whether you have been married 50 years, 25 years or perhaps even one year.</p>
          <Link className="btn secondary" to="/weddings/#renew-vows">Find out More</Link>
        </div>
        <div to="/funerals" className="block">
          <Img
              fixed={images.funeral}
              alt="Photo of the hand of a woman wearing a black dress with a red rose and a coffin with roses on it in the background"
              Tag='figure'
          />
          <h2>Funeral Celebrant</h2>
          <p>With compassion and attention to detail, I will ensure your loved ones are remembered as they deserve to be.</p>
          <Link className="btn secondary" to="/funerals">Find out More</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
      file(relativePath: {eq: "banner.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
      }
      allFile(filter: {
        extension: {regex: "/(jpg)/"}
      }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
  }
`

export default IndexPage
