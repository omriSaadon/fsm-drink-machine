import React from 'react';
import { Card, Alert, Button } from 'antd';
import { useStore } from 'store/FsmStore';
import { getCurrentBudget, getMachineStatus } from 'store/fsm_reducer';
import {
  GENERAL_ACTIONS, STATES, ACTION_STATES, COINS,
} from 'constants/index';
import classes from './Payment.scss';

const Payment = () => {
  const [state, dispatch] = useStore();

  const currentBudget = getCurrentBudget(state);
  const drinkMachineStatus = getMachineStatus(state);

  const onPayment = (value) => () => {
    if (drinkMachineStatus === STATES.DELIVERY) {
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Please wait until the machine finish delivery', type: 'error' } });
    } else if (currentBudget - value >= 0) {
      dispatch({ state: ACTION_STATES.PAYMENT, payload: value });
    } else {
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Margin is Disallowed', type: 'error' } });
    }
  };

  return (
    <Card title="Payment">
      <Alert
        message="We accepts coins only"
        type="warning"
      />
      <div className={classes.coins}>
        {COINS.map((coin) => <Button onClick={onPayment(coin.value)} key={coin.key} shape="round" size="medium">{coin.label}</Button>)}
      </div>
    </Card>
  );
};

export default Payment;
