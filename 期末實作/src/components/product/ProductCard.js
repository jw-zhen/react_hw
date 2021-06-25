import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Box,
  Link,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { useContext, useState as sState } from 'react';
import { AppContext } from '../../Context';

const ProductCard = () => {
  const {
    salesorders,
    seditMode,
    scancelEdit,
    updatesalesorder,
    onedeitals,
    deletesalesorder,
  } = useContext(AppContext);
  const [newData, setNewData] = sState({});

  const saveBtn = () => {
    updatesalesorder(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (seq, OrderId, EmpId, CustId, OrderDate, Descript) => {
    setNewData({
      seq, OrderId, EmpId, CustId, OrderDate, Descript
    });
    seditMode(seq);
  };

  const deleteConfirm = (seq) => {
    if (window.confirm('Are you sure?')) {
      deletesalesorder(seq);
    }
  };

  const checkConfirm = (OrderId) => {
    if (window.confirm('check detail')) {
      onedeitals(OrderId);
    }
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Link
          component={RouterLink}
          to="/register1"
          variant="h6"
        >
          <Button
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            insert
          </Button>
        </Link>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  編號
                </TableCell>
                <TableCell>
                  訂單編號
                </TableCell>
                <TableCell>
                  員工代號
                </TableCell>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  訂單日期
                </TableCell>
                <TableCell>
                  備註
                </TableCell>
                <TableCell>
                  動作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { salesorders.map(({
                seq, OrderId, EmpId, CustId, OrderDate, Descript, isEditing
              }) => {
                if (isEditing === true) {
                  return (
                    <TableRow
                      key={seq}
                    >
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={seq}
                          onChange={(e) => updateNewData(e, 'seq')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={OrderId}
                          onChange={(e) => updateNewData(e, 'OrderId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={EmpId}
                          onChange={(e) => updateNewData(e, 'EmpId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={CustId}
                          onChange={(e) => updateNewData(e, 'CustId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={OrderDate}
                          onChange={(e) => updateNewData(e, 'OrderDate')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Descript}
                          onChange={(e) => updateNewData(e, 'Descript')}
                        />
                      </TableCell>
                      <TableCell>
                        <Button className="btn green-btn" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button
                          className="btn default-btn"
                          onClick={() => scancelEdit(seq)}
                        >
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
                return (
                  <TableRow key={seq}>
                    <TableCell>{seq}</TableCell>
                    <TableCell>{OrderId}</TableCell>
                    <TableCell>{EmpId}</TableCell>
                    <TableCell>{CustId}</TableCell>
                    <TableCell>{OrderDate}</TableCell>
                    <TableCell>{Descript}</TableCell>
                    <TableCell>
                      <Button
                        className="btn default-btn"
                        onClick={() => checkConfirm(OrderId)}
                      >
                        <Link
                          component={RouterLink}
                          to="/detail"
                          variant="h6"
                        >
                          check
                        </Link>
                      </Button>
                      <Button
                        className="btn default-btn"
                        onClick={() => enableEdit(seq, OrderId, EmpId, CustId, OrderDate, Descript)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn red-btn"
                        onClick={() => deleteConfirm(seq)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={salesorders.length}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default ProductCard;
