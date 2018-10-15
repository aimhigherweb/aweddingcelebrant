import React from 'react'

import Layout from '../components/layout'

import Funeral from '../images/funeral.jpg'

const meta = {
	name: 'Funerals',
	description: 'With compassion and attention to detail, I will ensure your loved ones are remembered as they deserve to be.',
  slug: '/funerals',
  image: Funeral
};

const Funerals = () => (
  <Layout meta={meta}>
    <h1>Funerals</h1>
    <p>With compassion and attention to detail, I will ensure your loved ones are remembered as they deserve to be.</p>
    <img class="right" src={Funeral} />
    <p>A Funeral Service is one that helps the departed’s loved ones celebrate their life. So many would say that a happy service is certainly memorable. I find it very gratifying to provide my families with a funeral service that helps them with the grieving process.</p>
    <p>Once again I take pride in my work providing a loving, caring service that many tell me after it is over, that is was a ‘Beautiful Service’. One elderly gentleman once told me that he hated going to funerals and being the age that he was (about 80) he went to many, but he enjoyed the service I had just given. He said this with a lovely smile.</p>
    <p>The idea behind a Civil Celebrant doing a Funeral Service is so that it won’t be a religious service (or sermon) but some families still like to have the Lord’s Prayer, the 23rd Psalm or perhaps a short prayer or reading from the Bible included in the service and I have no difficulty in saying either one. Just the same, if a family doesn’t want any religious aspect to the service, I don’t have any adversity to that either.</p>
    <p>With each service, I will meet the family where possible, and take down notes and stories on the deceased’s life. I then return to my computer and put together their ‘Story’. I will email it to a member of the family so that they can edit it in any way they feel necessary. This is very important as I must get it right every time. There is no ‘second time around’ with a Funeral. I always like to think that I have given something back to the family to help them in their grief and move on with their lives.</p>
    <blockquote>Give your loved one the dignity they deserve with a caring and loving Funeral Service.</blockquote>
  </Layout>
)

export default Funerals;
