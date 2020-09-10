import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(res => {
        dispatch(purchaseBurgerSucess(res.data.name, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSucess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_INIT
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json')
      .then(res => {
        const fetched = [];
        for (let key in res.data) {
          fetched.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSucess(fetched));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
