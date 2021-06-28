import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useState as uState, useContext } from 'react';
import { AppContext } from '../Context';

const Login = () => {
  const { loginuser } = useContext(AppContext);
  const [newuser, setNewuser] = uState({});

  const addNewuser = (e, field) => {
    setNewuser({
      ...newuser,
      [field]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    loginuser(newuser);
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
              Phone: ''
            }}
          >
            {({
              errors,
              handleBlur,
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
                  error={Boolean(touched.Phone && errors.Phone)}
                  fullWidth
                  helperText={touched.Phone && errors.Phone}
                  label="Password(phone)"
                  margin="normal"
                  name="Phone"
                  onBlur={handleBlur}
                  type="password"
                  variant="outlined"
                  onChange={(e) => addNewuser(e, 'Phone')}
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
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
