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
  const { insertdetail } = useContext(AppContext);
  const [newdetail, setnewdetail] = useState({});

  const addNewProduct = (e, field) => {
    setnewdetail({
      ...newdetail,
      [field]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    insertdetail(newdetail);
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
              seq: '',
              OrderId: '',
              ProdId: '',
              Qty: '',
              Discount: ''
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
                    Create new detail
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
                  onChange={(e) => addNewProduct(e, 'seq')}
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
                  onChange={(e) => addNewProduct(e, 'OrderId')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.ProdId && errors.ProdId)}
                  fullWidth
                  helperText={touched.ProdId && errors.ProdId}
                  label="ProdId"
                  margin="normal"
                  name="ProdId"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'ProdId')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.Qty && errors.Qty)}
                  fullWidth
                  helperText={touched.Qty && errors.Qty}
                  label="Qty"
                  margin="normal"
                  name="Qty"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'Qty')}
                  variant="outlined"
                  type="text"
                />
                <TextField
                  error={Boolean(touched.Discount && errors.Discount)}
                  fullWidth
                  helperText={touched.Discount && errors.Discount}
                  label="Discount"
                  margin="normal"
                  name="Discount"
                  onBlur={handleBlur}
                  onChange={(e) => addNewProduct(e, 'Discount')}
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

export default Register;
