import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Link,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useState as uState, useContext } from 'react';
import { AppContext } from '../Context';

const Login = () => {
  const { checkusers } = useContext(AppContext);
  const [newuser, setNewuser] = uState({});

  const addNewuser = (e, field) => {
    setNewuser({
      ...newuser,
      [field]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    checkusers(newuser);
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              id: '',
              password: ''
            }}
          >
            {({
              errors,
              handleBlur,
              isSubmitting,
              touched
            }) => (
              <form onSubmit={submitProduct}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.EmpId && errors.EmpId)}
                  fullWidth
                  helperText={touched.EmpId && errors.EmpId}
                  label="EmpId"
                  margin="normal"
                  name="EmpId"
                  onBlur={handleBlur}
                  variant="outlined"
                  onChange={(e) => addNewuser(e, 'EmpId')}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password(phone)"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  type="password"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Link
                    component={RouterLink}
                    to="/app/customers"
                    variant="h6"
                  >
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Link>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
