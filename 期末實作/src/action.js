/* eslint-disable */
import { useEffect, useState } from "react";
import { useEffect as checkEffect, useState as oState } from "react";
import { useEffect as sEffect, useState as sState } from "react";
import { useState as rState } from "react";
import { useState as uState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

export const action = () => {
  let [products, setProducts] = useState([]);
    //userLength is for showing the Data Loading message.
  let [ProductLength, setProductLength] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/php-react/all-products.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
          setProductLength(true);
          console.log(1);
        } else {
          setProductLength(0);
          console.log(2);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectProduct = (newProduct) => {
    fetch("http://localhost/php-react/select-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) {
          setProducts(data.products);
          Navigate('/app/customers', {replace: true});
        } else {
          setProducts();
          Navigate('/app/customers', {replace: true});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Inserting a new user into the database.
  const insertProduct = (newProduct) => {
    fetch("http://localhost/php-react/add-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.pid) {
          setProducts([
            {
              pid: data.pid,
              ...newProduct,
            },
            ...products,
          ]);
          setProductLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editMode = (pid) => {
    products = products.map((product) => {
      if (product.pid === pid) {
        product.isEditing = true;
        return product;
      }
      product.isEditing = false;
      return product;
    });
    setProducts(products);
  };

  // Cance the edit mode.
  const cancelEdit = (pid) => {
    products = products.map((product) => {
      if (product.pid === pid) {
        product.isEditing = false;
        return product;
      }
      return product;
    });
    setProducts(products);
  };

  // Updating a user.
  const updateProduct = (productData) => {
    fetch("http://localhost/php-react/update-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          products = products.map((product) => {
            if (product.pid === productData.pid) {
              product.isEditing = false;
              product.productname =productData.productname;
              product.UnitPrice = productData.UnitPrice;
              product.Cost = productData.Cost;
              return product;
            }
            return product;
          });
          setProducts(products);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deleteProduct = (theID) => {
      // filter outing the user.
    let productDeleted = products.filter((product) => {
      return product.pid !== theID;
    });
    fetch("http://localhost/php-react/delete-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProducts(productDeleted);
          if (products.length === 1) {
            setProductLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  let [checko, setchecko] = oState([]);
  let [checkoLength, setcheckoLength] = oState(null);

  checkEffect(() => {
    fetch("http://localhost/php-react/check.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setchecko(data.checko);
          setcheckoLength(true);
          console.log(1);
        } else {
          setcheckoLength(0);
          console.log(2);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectchecko = (newProduct) => {
    fetch("http://localhost/php-react/checkoselect.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) {
          setchecko(data.checko);
          Navigate('/404', {replace: true});
        } else {
          setchecko();
          Navigate('/404', {replace: true});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let [salesorders, setsalesorder] = sState([]);
  let [salesorderLength, setsalesorderLength] = sState(null);

  sEffect(() => {
    fetch("http://localhost/php-react/all-salesorder.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setsalesorder(data.salesorders);
          setsalesorderLength(true);
          console.log(1);
        } else {
          setsalesorderLength(0);
          console.log(2);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectorder = (newProduct) => {
    fetch("http://localhost/php-react/selectorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) {
          setsalesorder(data.salesorders);
          navigate('/app/products', {replace: true});
        } else {
          setsalesorder();
          navigate('/app/products', {replace: true});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Inserting a new user into the database.
  const insertsalesorder = (newsalesorders) => {
    fetch("http://localhost/php-react/add-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsalesorders),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.seq) {
          setsalesorder([
            {
              seq: data.seq,
              ...newsalesorders,
            },
            ...salesorders,
          ]);
          setsalesorderLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const seditMode = (seq) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.seq === seq) {
        salesorder.isEditing = true;
        return salesorder;
      }
      salesorder.isEditing = false;
      return salesorder;
    });
    setsalesorder(salesorders);
  };

  // Cance the edit mode.
  const scancelEdit = (seq) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.seq === seq) {
        salesorder.isEditing = false;
        return salesorder;
      }
      return salesorder;
    });
    setsalesorder(salesorders);
  };

  // Updating a user.
  const updatesalesorder = (salesorderData) => {
    fetch("http://localhost/php-react/update-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salesorderData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          salesorders = salesorders.map((salesorder) => {
            if (salesorder.seq === salesorderData.seq) {
              salesorder.isEditing = false;
              salesorder.OrderId =salesorderData.OrderId;
              salesorder.EmpId = salesorderData.EmpId;
              salesorder.CustId = salesorderData.CustId;
              salesorder.OrderDate = salesorderData.OrderDate;
              salesorder.Descript = salesorderData.Descript;
              return salesorder;
            }
            return salesorder;
          });
          setsalesorder(salesorders);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deletesalesorder = (theID) => {
      // filter outing the user.
    let salesorderDeleted = salesorders.filter((salesorder) => {
      return salesorder.seq !== theID;
    });
    fetch("http://localhost/php-react/delete-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setsalesorder(salesorderDeleted);
          if (salesorders.length === 1) {
            setsalesorderLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let [orderdetail, setorderdetial] = rState([]);
  let [orderdetialLength, setorderdetialLength] = rState(null);

  const onedeitals = (ordid) => {
    // filter outing the user.
  fetch("http://localhost/php-react/one-detail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ OrderId: ordid }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setorderdetial(data.orderdetail);
        setorderdetialLength(true);
      } else {
        setorderdetialLength(0);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
  
const insertdetail = (newdetail) => {
  fetch("http://localhost/php-react/add-detail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newdetail),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.seq) {
        setorderdetial([
          {
            seq: data.seq,
            ...newdetail,
          },
          ...orderdetail,
        ]);
        setorderdetialLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteorderdetail = (theID) => {
  // filter outing the user.
let sorderdetailDeleted = orderdetail.filter((orderdetail) => {
  return orderdetail.seq !== theID;
});
fetch("http://localhost/php-react/delete-detail.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ seq: theID }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      setorderdetial(sorderdetailDeleted);
      if (orderdetail.length === 1) {
        setorderdetialLength(0);
      }
    } else {
      alert(data.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

const oeditMode = (seq) => {
  orderdetail = orderdetail.map((orderdetaila) => {
    if (orderdetaila.seq === seq) {
      orderdetaila.isEditing = true;
      return orderdetaila;
    }
    orderdetaila.isEditing = false;
    return orderdetaila;
  });
  setorderdetial(orderdetail);
};

// Cance the edit mode.
const ocancelEdit = (seq) => {
  orderdetail = orderdetail.map((orderdetaila) => {
    if (orderdetaila.seq === seq) {
      orderdetaila.isEditing = false;
      return orderdetaila;
    }
    return orderdetaila;
  });
  setorderdetial(orderdetail);
};

// Updating a user.
const updatedetail = (detailData) => {
  fetch("http://localhost/php-react/update-detail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(detailData),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        orderdetail = orderdetail.map((orderdetaila) => {
          if (orderdetaila.seq === detailData.seq) {
            orderdetaila.isEditing = false;
            orderdetaila.ProfId = detailData.ProfId;
            orderdetaila.Qty = detailData.Qty;
            orderdetaila.Discount = detailData.Discount;
            return orderdetaila;
          }
          return orderdetaila;
        });
        setorderdetial(orderdetail);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

let [suser, setsuser] = uState([]);

const loginuser = (newProduct) => {
  fetch("http://localhost/php-react/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success === 1) {
        setsuser(data.suser);
        console.log(products);
        navigate("/app/customers");
      } else {
        setsuser();
        navigate("/login", {replace: true});
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
  
  return {
    loginuser,
    selectorder,
    selectchecko,
    selectProduct,
    suser,
    orderdetail,
    salesorders,
    checko,
    products,
    oeditMode,
    updatedetail,
    ocancelEdit,
    deleteorderdetail,
    onedeitals,
    insertdetail,
    editMode,
    cancelEdit,
    updateProduct,
    insertProduct,
    deleteProduct,
    seditMode,
    scancelEdit,
    updatesalesorder,
    insertsalesorder,
    deletesalesorder,
    ProductLength,
    checkoLength,
    salesorderLength,
    orderdetialLength
  };
};  