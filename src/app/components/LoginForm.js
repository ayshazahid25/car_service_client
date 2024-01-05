"use client";
// components/LoginForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted:", values);
    },
  });

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
