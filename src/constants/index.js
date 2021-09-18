import React from 'react';

export const INITIAL_BUDGET = 10;

export const GENERAL_ACTIONS = {
  ADD_BUDGET: 'addBudget',
  ADD_MESSAGE: 'addMessage',
};

export const STATES = {
  IDLE: 'idle',
  ORDERING: 'ordering',
  DELIVERY: 'delivery',
};

export const ACTION_STATES = {
  PAYMENT: 'payment',
  CANCEL: 'cancel',
  PURCHASE: 'purchase',
  DONE: 'done',
};

export const COINS = [
  { key: 'one', label: '1 ₪', value: 1 },
  { key: 'two', label: '2 ₪', value: 2 },
  { key: 'five', label: '5 ₪', value: 5 },
  { key: 'ten', label: '10 ₪', value: 10 },
];

export const DRINKS = [
  {
    key: 'Coke', label: 'Coke', price: 8, icon: <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/coca-cola.jpeg`} />,
  },
  {
    key: 'Sparkling_Water', label: 'Sparkling Water', price: 6, icon: <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/sparkling-water.jpeg`} />,
  },
  {
    key: 'Water', label: 'Water', price: 5, icon: <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/water.jpeg`} />,
  },
  {
    key: 'Ice_Tea', label: 'Ice Tea', price: 7, icon: <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/ice-tea.jpeg`} />,
  },
];

export const FLOW_INITIAL_ELEMENTS = [
  {
    id: STATES.IDLE,
    data: { label: 'Idle' },
    position: { x: 10, y: 100 },
    targetPosition: 'right',
    sourcePosition: 'bottom',
  },
  {
    id: 'payment_needed', data: { label: 'Payment Is Needed' }, position: { x: 300, y: 10 }, targetPosition: 'left', sourcePosition: 'left',
  },
  {
    id: STATES.ORDERING, data: { label: 'Ordering' }, position: { x: 420, y: 240 }, sourcePosition: 'left',
  },
  {
    id: STATES.DELIVERY, data: { label: 'delivery' }, position: { x: 550, y: 100 }, sourcePosition: 'left', targetPosition: 'bottom',
  },
  {
    id: ACTION_STATES.CANCEL, data: { label: 'Cancel Order' }, position: { x: 100, y: 200 }, targetPosition: 'right', sourcePosition: 'top',
  },
  {
    id: 'idle-payment_needed',
    source: STATES.IDLE,
    target: 'payment_needed',
    labelStyle: { fill: 'red', fontWeight: 700 },
    label: 'Clicked item without payment',
  },
  {
    id: 'idle-ordering', source: STATES.IDLE, target: STATES.ORDERING, animated: true, label: 'Payment Succeed', arrowHeadType: 'arrowclosed',
  },
  {
    id: 'ordering-delivery', source: STATES.ORDERING, target: STATES.DELIVERY, animated: true, label: 'Item Selected', arrowHeadType: 'arrowclosed',
  },
  {
    id: 'ordering-cancel',
    source: STATES.ORDERING,
    target: ACTION_STATES.CANCEL,
    label: 'Canceled',
    labelStyle: { fill: 'red', fontWeight: 700 },
    arrowHeadType: 'arrowclosed',
  },
  {
    id: 'cancel-idle', source: ACTION_STATES.CANCEL, target: STATES.IDLE, arrowHeadType: 'arrowclosed',
  },
  {
    id: 'delivery-idle',
    source: STATES.DELIVERY,
    target: STATES.IDLE,
    arrowHeadType: 'arrowclosed',
    animated: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: {
      fill: '#FFCC00', fillOpacity: 1,
    },
    label: 'Finished',
  },
];
