import React from 'react'
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Container from 'components/Container/Container'
import Filter from 'components/Filter/Filter'
import BackgroundContacts from '../../images/img_contacts/contactsBackground.jpg';

import css from './Сontacts.module.css';
import ContactListWrap from 'components/ContactListWrap/ContactListWrap'


function Contacts() {
  return (
    <main className={css.background} style={{ backgroundImage: `url(${BackgroundContacts})` }}>
      <Container>
        <div className={css.section}>
          <div className={css.wrapper}>
            <ContactForm />
          </div>
          <div className={css.wrapper}>
            <ContactListWrap>
              <Filter />
              <ContactList />
            </ContactListWrap>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contacts