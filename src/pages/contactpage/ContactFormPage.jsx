
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';  // Importa SweetAlert
import {  Container, Title, Label, StyledField, TextArea, ErrorText, SubmitButton, StyledForm } from './styledcontactform'

const ContactFormPage = () => {
  // Esquema de validación utilizando Yup
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(2, 'El nombre es muy corto')
      .required('El nombre es obligatorio'),
    apellido: Yup.string()
      .min(2, 'El apellido es muy corto')
      .required('El apellido es obligatorio'),
    email: Yup.string()
      .email('El email no es válido')
      .required('El email es obligatorio'),
    asunto: Yup.string()
      .min(10, 'El asunto debe tener al menos 10 caracteres')
      .required('El asunto es obligatorio')
  });

  return (
    <Container>
      <Title>Contacto</Title>
      <Formik
        initialValues={{ nombre: '', apellido: '', email: '', asunto: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Formulario enviado', values);
          setTimeout(() => {
            // Mostrar alerta de éxito usando SweetAlert
            Swal.fire('Enviado con exito!');
            resetForm();  // Reiniciar el formulario
            setSubmitting(false);  // Finaliza el envío
          }, 400);
        }}
      >

        {({ isSubmitting }) => (
          <Form as={StyledForm}>
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Field as={StyledField} type="text" name="nombre" />
              <ErrorMessage name="nombre" component={ErrorText} />
            </div>

            <div>
              <Label htmlFor="apellido">Apellido</Label>
              <Field as={StyledField} type="text" name="apellido" />
              <ErrorMessage name="apellido" component={ErrorText} />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Field as={StyledField} type="email" name="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </div>

            <div>
              <Label htmlFor="asunto">Asunto</Label>
              <Field as={TextArea} name="asunto" />
              <ErrorMessage name="asunto" component={ErrorText} />
            </div>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Enviar
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ContactFormPage;
