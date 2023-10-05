import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
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

const ContactForm = ({ contacts, onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const isContactExists = contacts && contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());

        if (isContactExists) {
          alert('Contact with this name already exists!');
        } else {
          onAddContact({ id: uuidv4(), ...values });
          resetForm();
        }
      }}
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
        <button type="submit" className={styles.button}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
