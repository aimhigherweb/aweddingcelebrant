import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout'

import './gallery.scss';

const meta = {
	name: 'Gallery',
	description: 'Photos taken at the various events I officiate',
	slug: '/gallery'
};

const Gallery = ({data}) => {
  let images = {},
      imageData = data.allFile.edges;

  imageData.map((image) => {
    images[image.node.name] = image.node.childImageSharp.fixed;
  })

  let gallery = images.map((image) => (
    <Img
        fixed={image}
        Tag='figure'
    />
  ))

  return  (
    <Layout meta={meta}>
      <h1>Gallery</h1>
      <div class="gallery">
        {gallery}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {
      extension: {regex: "/(jpg)/"},
      relativeDirectory: {eq: "gallery"}
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

export default Gallery
