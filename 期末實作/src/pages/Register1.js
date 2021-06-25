import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link
} from '@material-ui/core';
import { useState, useContext } from 'react';
import { AppContext } from '../Context';

const Register1 = () => {
  const { insertsalesorder } = useContext(AppContext);
  const [newsalesorder, setNewsalesorder] = useState({});

  const addNewsalesorder = (e, field) => {
    setNewsalesorder({
      ...newsalesorder,
      [field]: e.target.value,
    });
  };

  const submitsalesorder = (e) => {
    e.preventDefault();
    insertsalesorder(newsalesorder);
    e.target.reset();
  };
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
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
              OrderId: '',
              EmpId: '',
              CustId: '',
              OrderDate: '',
              Descript: ''
            }}
          >
            {({
              errors,
              handleBlur,
              isSubmitting,
              touched
            }) => (
              <form onSubmit={submitsalesorder}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new salesorder
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.seq && errors.seq)}
                  fullWidth
                  helperText={touched.seq && errors.seq}
                  label="seq"
                  margin="normal"
                  name="seq"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'seq')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.OrderId && errors.OrderId)}
                  fullWidth
                  helperText={touched.OrderId && errors.OrderId}
                  label="OrderId"
                  margin="normal"
                  name="OrderId"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'OrderId')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.EmpId && errors.EmpId)}
                  fullWidth
                  helperText={touched.EmpId && errors.EmpId}
                  label="EmpId"
                  margin="normal"
                  name="EmpId"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'EmpId')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.CustId && errors.CustId)}
                  fullWidth
                  helperText={touched.CustId && errors.CustId}
                  label="CustId"
                  margin="normal"
                  name="CustId"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'CustId')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.OrderDate && errors.OrderDate)}
                  fullWidth
                  helperText={touched.OrderDate && errors.OrderDate}
                  label="OrderDate"
                  margin="normal"
                  name="OrderDate"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'OrderDate')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.Descript && errors.Descript)}
                  fullWidth
                  helperText={touched.Descript && errors.Descript}
                  label="Descript"
                  margin="normal"
                  name="Descript"
                  onBlur={handleBlur}
                  onChange={(e) => addNewsalesorder(e, 'Descript')}
                  variant="outlined"
                  type="text"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    value="insert"
                  >
                    insert
                  </Button>
                </Box>
                <Box sx={{ py: 2 }}>
                  <Link
                    component={RouterLink}
                    to="/app/products"
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
                      return
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

export default Register1;
