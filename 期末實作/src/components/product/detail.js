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
    orderdetail,
    oeditMode,
    ocancelEdit,
    updatedetail,
    deleteorderdetail,
  } = useContext(AppContext);

  const [newData, setNewData] = sState({});

  const saveBtn = () => {
    updatedetail(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (seq, ProdId, Qty, Discount) => {
    setNewData({
      seq, ProdId, Qty, Discount
    });
    oeditMode(seq);
  };

  const deleteConfirm = (seq) => {
    if (window.confirm('Are you sure?')) {
      deleteorderdetail(seq);
    }
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Link
          component={RouterLink}
          to="/app/products"
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
        <Link
          component={RouterLink}
          to="/register2"
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
                  產品編號
                </TableCell>
                <TableCell>
                  數量
                </TableCell>
                <TableCell>
                  折扣
                </TableCell>
                <TableCell>
                  動作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { orderdetail.map(({
                seq, ProdId, Qty, Discount, isEditing
              }) => {
                if (isEditing === true) {
                  return (
                    <TableRow>
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
                          defaultValue={ProdId}
                          onChange={(e) => updateNewData(e, 'ProdId')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Qty}
                          onChange={(e) => updateNewData(e, 'Qty')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Discount}
                          onChange={(e) => updateNewData(e, 'Discount')}
                        />
                      </TableCell>
                      <TableCell>
                        <Button className="btn green-btn" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button
                          className="btn default-btn"
                          onClick={() => ocancelEdit(seq)}
                        >
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
                return (
                  <TableRow>
                    <TableCell>{seq}</TableCell>
                    <TableCell>{ProdId}</TableCell>
                    <TableCell>{Qty}</TableCell>
                    <TableCell>{Discount}</TableCell>
                    <TableCell>
                      <Button
                        className="btn default-btn"
                        onClick={() => enableEdit(seq, ProdId, Qty, Discount)}
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
        count={orderdetail.length}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default ProductCard;
