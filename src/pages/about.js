import React from 'react'

import Layout from '../components/layout'

import Janne from '../images/janne.jpg';

const meta = {
	name: 'About Janne',
	description: 'With years of experience helping to make each ceremony you have, a very special one to remember',
	slug: '/about'
};

const About = () => (
	<Layout meta={meta}>
		<h1>About Janne</h1>
		<p>With years of experience helping to make each ceremony you have, a very special one to remember</p>
		<img className="right" src={Janne} />
		<p>I am a very energetic and vibrant Celebrant who absolutely loves being in this wonderful industry. I adore carrying out the ceremonies and put in 100% effort with every single one! Each ceremony I do is just as important as the very first one I did over 10 years ago.</p>
		<p>I decided to become a Registered Celebrant because I was bored with my job at the time and I decided that I wanted to be my own boss and work in an industry that gave me a fabulous sense of achievement.</p>
		<p>I have been married since 1973 to the same wonderful man and have raised two handsome sons who have blessed me with four of the most loveable and beautiful grandchildren in the world. (Well that’s my opinion!)</p>
		<p>What more could I want but to be involved in joining other couples in marriage, wishing them a lifetime of amazing memories and happiness, naming beautiful babies and children, or to help grieving families come to terms with the loss of their loved ones.</p>
		<p>To me, being a Celebrant, has been my best career choice and one that I look forward to every day! My friends tell me that they have never seen in me, the passion I have now, for my career.</p>
		<p>I approach each day with gusto and can’t wait for the next ceremony!</p>
		<blockquote>Your Ceremony Your Way!</blockquote>
  </Layout>
)

export default About
