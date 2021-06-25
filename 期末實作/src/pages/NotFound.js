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
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from '../Context';

const NotFound = () => {
  const {
    checko,
  } = useContext(AppContext);

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
        <Box sx={{ minWidth: 1050 }}>
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
