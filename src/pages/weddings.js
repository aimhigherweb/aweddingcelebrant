import React from 'react'

import Layout from '../components/layout'

import Wedding from '../images/wedding_kingspark.jpg'
import YoungCouple from '../images/young_couple.jpg'
import Couple from '../images/couple-on-beach.jpg'

const Weddings = () => (
  <Layout>
    <h1>Weddings</h1>
    <p>With years of experience, I look forward to making this day everything you ever dreamed it would be.</p>
    <h3>Why do so many couples choose me?</h3>
    <img src={YoungCouple} class="right" />
    <p>I am a dedicated Celebrant, who takes great delight in providing my couples with a ceremony that will be remembered, cherished and celebrated for the rest of their lives.</p>
    <p>I’ll give you several different ceremonies to choose from and once you have decided on the basic ceremony, we will then work together in making it unique for you. I have numerous readings, poems and prayers that you can choose from or you can even source your own. You may also wish to have a very special friend or relative read one of these or perhaps sing a ‘favourite’ song, to make your wedding ceremony a very memorable event to kick start your lives together as Husband and Wife.</p>
    <p>Over a period of 3 – 4 appointments (including a rehearsal) we will fine tune the ceremony so that on the day there will be no hiccups. You will be able to choose the vows I provide or write you own if you wish.</p>
    <p>I have a ‘state of the art’ sound system that I use so that you can have the music of your choice and if desired, I will use the microphone so that no one misses a single word of this most memorable event.</p>
    <p>Many Celebrants are now choosing not to have a rehearsal but I feel that if you are having your ceremony out in the sun, then you should most certainly have a rehearsal. You need to know just where you will be standing in relation to the sun. You don’t want to be squinting your eyes in all of your photos do you?</p>
    <p>Give me a call now to take your very first step towards an amazing and memorable Wedding Day.</p>
    <blockquote className="testimonial">
      <p>We were looking for a professional and welcoming wedding celebrant, that would help us feel comfortable and support us in having our ceremony play out the way we always imagined it would do. After an initial meeting with Janne, it was clear that there was no better choice for us.</p>
      <p>Janne went above and beyond, working with us to refine our vows and ceremony plan, even helping figure out how our Westies could play a part.</p>
      <p>We would have absolutely no hesitation in recommending Janne’s services as a wedding celebrant, and she’ll be our first port of call for any occasion that our family needs a celebrant.</p>
      <span>Leah and Ben Derham</span>
    </blockquote>
    <h2 id="commitment-ceremonies">Commitment Service</h2>
    <img src={Wedding} />
    <p>With years of experience, I look forward to making this day everything you ever dreamed it would be.</p>
    <p>No matter who you love you deserve to have a service that reflects your feelings.</p>
    <p>I am delighted to be able to carry out Commitment Ceremonies for couples who share a life together and want the world to know. As with my wedding ceremonies, I will put together a ceremony for you that will be unique to all others. We will go over the wording together and fine tune it until you are both happy and excited about it. Naturally you will choose to have different poems, readings and perhaps even songs to make your special event one that you will cherish forever.</p>
    <p>We will also carry out a rehearsal at your chosen place for the ceremony checking every detail to ensure it is perfect in every way.</p>
    <p>Tell the world who you love, proudly and with the formality you deserve.</p>
    <blockquote>Your Ceremony Your Way.</blockquote>
    <h2 id="renew-vows">Renewal of Vows</h2>
    <p>A Renewal of Vows ceremony is something that can be extremely special whether you have been married 50 years, 25 years or perhaps even one year. Yes even after a year very romantic and loving couples renew or reaffirm their vows in a loving and beautiful environment.</p>
    <img class="right" src={Couple} />
    <p>Perhaps you eloped numerous years ago because you didn’t want the huge affair that your parents were organizing or you didn’t want your parents to know that you were getting married. You may have been married overseas without family and friends present and now want to have a ceremony with them present. Or you may have had the situation where parents of either the Bride or Groom couldn’t be present for the big occasion so you now want to have a ceremony that includes them. How lovely would that be?</p>
    <p>I have some beautiful ceremonies that you could choose from and you can even modify those ceremonies to make them unique to your requirements. With beautiful verses signifying your continued love for one another.</p>
    <p>As with my weddings, I will have my sound system set up so that you can have the music of your choice and if desired, I will use the microphone so that no one misses a single word of this most beautiful event.</p>
    <p>I will also provide you with a ‘Renewal of Vows’ certificate that you will want to have as a keepsake. Many of my couples frame their certificate to remind them of their devoted love to one another.</p>
    <blockquote>Make your ‘Renewal of Vows’ ceremony one to remember with love.</blockquote>
  </Layout>
)

export default Weddings
