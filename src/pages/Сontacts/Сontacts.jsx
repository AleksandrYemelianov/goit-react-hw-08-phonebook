import React from 'react'
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Container from 'components/Container/Container'
import Filter from 'components/Filter/Filter'
import BackgroundContacts from '../../images/img_contacts/contactsBackground1.webp';

import css from './Сontacts.module.css';
import ContactListWrap from 'components/ContactListWrap/ContactListWrap'
import { Outlet } from 'react-router-dom'


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
          <Outlet />
        </div>
      </Container>
    </main>
  );
};

export default Contacts