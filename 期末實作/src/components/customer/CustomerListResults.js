import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Button,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { useContext, useState } from 'react';
import { AppContext } from '../../Context';

const ProductListResults = () => {
  const {
    products,
    editMode,
    cancelEdit,
    updateProduct,
    deleteProduct,
  } = useContext(AppContext);

  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateProduct(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (pid, productname, UnitPrice, Cost) => {
    setNewData({
      pid, productname, UnitPrice, Cost
    });
    editMode(pid);
  };

  const deleteConfirm = (pid) => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(pid);
    }
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  產品名稱
                </TableCell>
                <TableCell>
                  單價
                </TableCell>
                <TableCell>
                  成本
                </TableCell>
                <TableCell>
                  動作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { products.map(({
                pid, productname, UnitPrice, Cost, isEditing
              }) => {
                if (isEditing === true) {
                  return (
                    <TableRow
                      key={pid}
                    >
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={productname}
                          onChange={(e) => updateNewData(e, 'productname')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={UnitPrice}
                          onChange={(e) => updateNewData(e, 'UnitPrice')}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          defaultValue={Cost}
                          onChange={(e) => updateNewData(e, 'Cost')}
                        />
                      </TableCell>
                      <TableCell>
                        <Button className="btn green-btn" onClick={() => saveBtn()}>
                          Save
                        </Button>
                        <Button
                          className="btn default-btn"
                          onClick={() => cancelEdit(pid)}
                        >
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
                return (
                  <TableRow key={pid}>
                    <TableCell>{productname}</TableCell>
                    <TableCell>{UnitPrice}</TableCell>
                    <TableCell>{Cost}</TableCell>
                    <TableCell>
                      <Button
                        className="btn default-btn"
                        onClick={() => enableEdit(pid, productname, UnitPrice, Cost)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn red-btn"
                        onClick={() => deleteConfirm(pid)}
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
        count={products.length}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default ProductListResults;
