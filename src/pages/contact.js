import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

import Layout from '../components/layout'

import { MapPin } from 'react-feather'

import './contact.scss'

const meta = {
	name: 'Contact Janne',
	description: 'Get in touch to see how I can help you make your ceremony one to remember',
	slug: '/contact',
}

// eslint-disable-next-line one-var
const Contact = () => {
		let ProdMap
		if (typeof window !== `undefined`) {
			ProdMap = () => (
				<Map style="mapbox://styles/mapbox/streets-v11" center={[115.748482, -31.799778]} zoom={[10]}>
					<Marker coordinates={[115.748482, -31.799778]} anchor="bottom">
						<MapPin />
					</Marker>
				</Map>
			)
		}
		return (
			<Layout meta={meta}>
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
						<p>
							<strong>Phone: </strong>{' '}
							<a href="tel:+61894018427" target="_blank">
								08 9401 8427
							</a>
						</p>
						<p>
							<strong>Mobile: </strong>{' '}
							<a href="tel:+61418955198" target="_blank">
								0418 955 198
							</a>
						</p>
						<ProdMap />
					</div>
				</div>
			</Layout>
		)
	},
	Map = ReactMapboxGl({
		accessToken: process.env.GATSBY_MAPBOX_API,
	})

export default Contact
