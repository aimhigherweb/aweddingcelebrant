import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout'

const meta = {
	name: 'Other Services',
	description: 'I also offer other services including Naming Ceremonies and Vow Renewals',
	slug: '/other-services'
};

const OtherServices = ({data}) => {
  let images = {},
      imageData = data.allFile.edges;

  imageData.map((image) => {
    images[image.node.name] = image.node.childImageSharp.fixed;
  })

  return (
    <Layout meta={meta}>
      <h1>Other Services</h1>
      <h2 id="naming-services">Naming Ceremony</h2>
      <p>This magical ceremony will give you and your family memories for a lifetime.</p>
      <Img
        fixed={images.baby}
        Tag='figure'
        className='right'
      />
      <p>In today’s busy world many families don’t have time to attend a church, therefore when it comes to giving their child a christening, many churches won’t carry out a service if the family doesn’t attend the church all year round. Therefore, a Naming Ceremony is about the only way they can formalize the naming of the newest member of their family. That beautiful little bundle of joy who has to have a name to get them through life.</p>
      <p>As a mother and grandmother who adores her offspring, I absolutely love carrying out a Naming Ceremony! Whether it is a small baby or young children, to carry out the service is very special to me. All children no matter what their age, have wonderful personalities and these can often be seen and encouraged throughout a Naming Ceremony.</p>
      <p>I like to meet the parents and children and go through the requirements about a week before the ceremony, fine tuning the wording so that it is a very happy occasion.</p>
      <p>As with my other services, if you would like a prayer or reading from the Bible, I am only too happy to comply with your wishes. However you may want a very close relative, God Parent or Guardian to read it for you.</p>
      <p>I provide a Naming Certificate to each child so that it can be kept in the family records for years to come. There is no doubt that you will remember your child’s Naming Ceremony for many years.</p>
      <h2>Renewal of Vows</h2>
      <p>A Renewal of Vows ceremony is something that can be extremely special whether you have been married 50 years, 25 years or perhaps even one year. Yes even after a year very romantic and loving couples renew or reaffirm their vows in a loving and beautiful environment.</p>
      <Img
        fixed={images['couple-on-beach']}
        Tag='figure'
      />
      <p>Perhaps you eloped numerous years ago because you didn’t want the huge affair that your parents were organizing or you didn’t want your parents to know that you were getting married. You may have been married overseas without family and friends present and now want to have a ceremony with them present. Or you may have had the situation where parents of either the Bride or Groom couldn’t be present for the big occasion so you now want to have a ceremony that includes them. How lovely would that be?</p>
      <p>I have some beautiful ceremonies that you could choose from and you can even modify those ceremonies to make them unique to your requirements. With beautiful verses signifying your continued love for one another.</p>
      <p>As with my weddings, I will have my sound system set up so that you can have the music of your choice and if desired, I will use the microphone so that no one misses a single word of this most beautiful event.</p>
      <p>I will also provide you with a ‘Renewal of Vows’ certificate that you will want to have as a keepsake. Many of my couples frame their certificate to remind them of their devoted love to one another.</p>
      <blockquote>Make your ‘Renewal of Vows’ ceremony one to remember with love.</blockquote>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {
      extension: {regex: "/(jpg)/"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 400, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`


export default OtherServices
