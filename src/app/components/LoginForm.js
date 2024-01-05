"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { styled } from "@mui/system";

const LoginForm = () => {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    background:
      'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://images.hindustantimes.com/auto/img/2022/03/22/600x338/Mercedes-AMG-and-Palace-Skateboards-present-four-spectacular-Art-Cars_1647920918572_1647920929948.jpg")',
    backgroundSize: "cover",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  }));

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
      console.log("Form submitted:", values);
    },
  });

  return (
    <StyledPaper
      elevation={10}
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
          style={{
            border: "1px solid black",
            borderRadius: "5px",
          }}
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
          style={{
            border: "1px solid black",
            borderRadius: "5px",
          }}
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
    </StyledPaper>
  );
};

export default LoginForm;
