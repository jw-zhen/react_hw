/* eslint-disable */
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Button,
  Link,
  Table,
  TableBody,
  TextField,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  InputAdornment,
  SvgIcon,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useContext, useState } from 'react';
import { AppContext } from '../Context';

const NotFound = () => {
  const {
    checko,
  } = useContext(AppContext);
  
  const [search, setsearch] = useState('');
  const { selectchecko } = useContext(AppContext);
  const addNewsalesorder = (e, field) => {
    setsearch({
      ...search,
      [field]: e.target.value,
    });
  };

  const submitsalesorder = (e) => {
    e.preventDefault();
    selectchecko(search);
    e.target.reset();
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Link
          component={RouterLink}
          to="/app/customers"
          variant="h6"
        >
          <Button
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            return
          </Button>
        </Link>
        <Table>
          <TableRow>
            <TableCell>開始日期</TableCell>
            <TableCell>結束日期</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
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
                type="date"
                placeholder="Search start data"
                variant="outlined"
                onChange={(e) => addNewsalesorder(e, 'datestart')}
              />
            </TableCell>
            <TableCell>
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
                type="date"
                placeholder="Search end data"
                variant="outlined"
                onChange={(e) => addNewsalesorder(e, 'dateend')}
              />  
            </TableCell>
            <TableCell>
              <form  onSubmit={submitsalesorder}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  search
                </Button>
              </form>
            </TableCell>
          </TableRow>
        </Table>
        <Box sx={{ minWidth: 850 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  客戶名稱
                </TableCell>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  總銷售金額
                </TableCell>
                <TableCell>
                  總利潤
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { checko.map(({
                CustName, CustId, aa, bb
              }) => {
                return (
                  <TableRow
                    key={CustId}
                  >
                    <TableCell>{CustName}</TableCell>
                    <TableCell>{CustId}</TableCell>
                    <TableCell>{aa}</TableCell>
                    <TableCell>{bb}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={checko.length}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};
export default NotFound;
