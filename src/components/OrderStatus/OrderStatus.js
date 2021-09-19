import React from 'react';
import { Card, Button } from 'antd';
import { useStore } from 'store/FsmStore';
import { getPaid, getMachineStatus } from 'store/fsm_reducer';
import { ACTION_STATES, STATES, GENERAL_ACTIONS } from 'constants/index';
import classes from './OrderStatus.scss';

const OrderStatus = () => {
  const [state, dispatch] = useStore();

  const paid = getPaid(state);
  const drinkMachineStatus = getMachineStatus(state);

  const paidText = `You have paid ${paid} ₪`;

  const onCancelPament = () => {
    // Cancel payment can be made only on Ordering state, otherwise an error wil appear.
    if (drinkMachineStatus === STATES.ORDERING) {
      dispatch({ state: ACTION_STATES.CANCEL });
    } else {
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Cancel can be made only on ordering status', type: 'error' } });
    }
  };

  return (
    <Card title="Order Status">
      <div>{paidText}</div>
      <Button className={classes.cancelPayment} onClick={onCancelPament} shape="round" size="small">Cancel Payment</Button>
    </Card>
  );
};

export default OrderStatus;
