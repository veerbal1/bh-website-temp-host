import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../FormUI/TextField";
import { Grid } from "@mui/material";
import Submit from "../FormUI/Submit";

const INITIAL_FORM_STATE = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  description: "",
};

const VALIDATION = Yup.object().shape({
  fname: Yup.string("Enter correct name").required("Required"),
  lname: Yup.string("Enter correct name").required("Required"),
  email: Yup.string().email().required("Required"),
});

const handleSubmit = (data) => {
  fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    .then((response) => response.json())
    .then((receivedData) => {
      console.log(receivedData);
    });
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={VALIDATION}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <TextField name="fname" label="Name" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="lname" label="Last Name" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="email" label="Email" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="phone" type="number" label="Phone" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Submit>Submit form</Submit>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ContactForm;
