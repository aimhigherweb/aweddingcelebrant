import React from 'react'

import Layout from '../components/layout'

const FAQ = () => (
  <Layout>
    <h1>FAQ</h1>
    <p>You will find a wealth of information regarding all aspects of the legal requirements in Western Australia plus many ideas and other resources to make your service come to life.</p>
    <details open>
      <summary>What Do You Get For Your Money?</summary>
      <p>We will meet at least 3 – 4 times (or more if necessary) to ensure we have the ceremony you have always dreamed of. I have several different ceremonies, poems and readings for you to choose from so that your ceremony is unique to you and not the same as your friend’s wedding ceremonies!</p>
      <p>I’ll provide you with all the legal documentation and register your marriage with the Department of Births, Deaths, and Marriages.</p>
      <p>I’ll provide you with my sound system so that you may play music of your choice during the ceremony and if necessary I’ll use the microphone ensuring that every loving word is heard by your family and friends. </p>
      <p>You can be assured of a loving, gentle and heartwarming ceremony.</p>
    </details>
    <details open>
      <summary>Notice of Intended Marriage form</summary>
      <p>Please be aware that unless you are currently overseas, you will need to fill out the Notice of Intended Marriage form with your chosen Celebrant. I will guide you through the process, informing you of all the legal requirements, witnessing your signatures and registering your marriage with the West Australian Registrar’s office. For any further information, please don’t hesitate to contact me.</p>
      <a class="btn secondary" href="/notice+of+intended+marriage+form.pdf" target="_blank">Download Form</a>
    </details>
  </Layout>
)

export default FAQ