import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';
import css from './UpdateContactModal.module.css';

function UpdateContactModal () {
  return (
    <div className={css.overlay}>
              <UpdateContactForm/>
    </div>
  );
};

export default UpdateContactModal