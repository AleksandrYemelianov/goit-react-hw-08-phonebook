import React from 'react'
import BackgraundHome from '../../images/img_home/homeBackgraund1.webp';
import css from './Home.module.css'

function Home() {
  return (
    <div className={css.background} style={{ backgroundImage: `url(${BackgraundHome})` }}>
      <main className={css.container}>
        <h2 className={css.title}>Hello, I'm your "Phonebook"!</h2>
        <p className={css.text}>I'll help you manage your contact list easily. Add new friends, save their names and phone numbers.</p>
        <p className={css.text}>Main features:</p>
        <ul className={css.list}>
          <li className={css.item}>Add new contacts and save their information.</li>
          <li className={css.item}>Search for contacts by name.</li>
          <li className={css.item}>Edit and delete contacts.</li>
          <li className={css.item}>Convenient and easy-to-use interface.</li>
        </ul>
        <p className={css.text}>Let this application make your contact management easier and more convenient! I wish you a pleasant use.</p>
      </main>
    </div>
  )
}

export default Home