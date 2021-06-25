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

const Register = () => {
  const { insertProduct } = useContext(AppContext);
  const [newProduct, setNewProduct] = useState({});

  const addNewProduct = (e, field) => {
    setNewProduct({
      ...newProduct,
      [field]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    insertProduct(newProduct);
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
              pid: '',
              productname: '',
              Unitprice: '',
              Cost: ''
            }}
          >
            {({
              errors,
              handleBlur,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={submitProduct}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new product
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Add your produtc data  create new produtc
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.pid && errors.pid)}
                  fullWidth
                  helperText={touched.pid && errors.pid}
                  label="pid"
                  margin="normal"
                  name="pid"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'pid')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.Productname && errors.Productname)}
                  fullWidth
                  helperText={touched.Productname && errors.Productname}
                  label="Productname"
                  margin="normal"
                  name="Productname"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'productname')}
                  value={values.Productname}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.UnitPrice && errors.UnitPrice)}
                  fullWidth
                  helperText={touched.UnitPrice && errors.UnitPrice}
                  label="UnitPrice"
                  margin="normal"
                  name="UnitPrice"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'UnitPrice')}
                  value={values.UnitPrice}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.Cost && errors.Cost)}
                  fullWidth
                  helperText={touched.Cost && errors.Cost}
                  label="Cost"
                  margin="normal"
                  name="Cost"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'Cost')}
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

export default Register;
