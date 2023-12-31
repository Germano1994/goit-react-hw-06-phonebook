import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Only letters, spaces, apostrophes, and dashes allowed')
    .min(2, 'Minimum 2 characters')
    .max(40, 'Maximum 40 characters')
    .required('Please enter a name'),
  number: Yup.string()
    .matches(/^[0-9-]*$/, 'Should only contain digits and hyphens')
    .required('Please enter a phone number'),
});

const ContactForm = () => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector((state) => state.contacts.contacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicateContact = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicateContact) {
      setIsDuplicate(true);
    } else {
      const newContact = { id: uuidv4(), ...values };
      dispatch(addContact(newContact));
      resetForm();
      setIsDuplicate(false);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  <Form className={styles.form}>
    <label className={styles.label}>
      Name
      <Field type="text" name="name" className={styles.input} />
      <ErrorMessage name="name" component="div" className={styles.error} />
    </label>

    <label className={styles.label}>
      Phone Number
      <Field type="tel" name="number" inputMode="numeric" className={styles.input} />
      <ErrorMessage name="number" component="div" className={styles.error} />
    </label>

    {isDuplicate && (
      <div className={`${styles.error} ${styles.errorMessage}`}>Contact with this name already exists!</div>
    )}

    <button type="submit" className={styles.button}>Add Contact</button>
  </Form>
</Formik>

    </div>
  );
};

export default ContactForm;
