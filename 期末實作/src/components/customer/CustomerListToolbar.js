import { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Link,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { AppContext } from '../../Context';

const CustomerListToolbar = (props) => {
  const a = {};
  a.productname = '';
  const [search, setsearch] = useState('');
  const { selectProduct } = useContext(AppContext);
  const gettext = (e, field) => {
    setsearch({
      ...search,
      [field]: e.target.value,
    });
    console.log(search);
    const o = {};
    o.productname = e.target.value;
    selectProduct(o);
    console.log(o);
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Link
          component={RouterLink}
          to="/register"
          variant="h6"
        >
          <Button
            color="primary"
            variant="contained"
          >
            Add product
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
                onChange={(e) => gettext(e, 'productname')}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CustomerListToolbar;
