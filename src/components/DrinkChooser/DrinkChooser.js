import React from 'react';
import { Button, Card } from 'antd';
import axios from 'axios';
import { useStore } from 'store/FsmStore';
import { getPaid, getMachineStatus } from 'store/fsm_reducer';
import {
  GENERAL_ACTIONS, STATES, ACTION_STATES, DRINKS,
} from 'constants/index';
import classes from './DrinkChooser.scss';

const DrinkChooser = () => {
  const [state, dispatch] = useStore();

  const paid = getPaid(state);
  const drinkMachineStatus = getMachineStatus(state);

  const onBuy = (price) => () => {
    if (drinkMachineStatus === STATES.DELIVERY) {
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Please wait until delivery is finished', type: 'error' } });
    } else if (paid - price >= 0) {
      dispatch({ state: ACTION_STATES.PURCHASE, payload: price });
      axios.post('https://fsmmock.free.beeceptor.com', { price })
        .then((res) => {
          dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: res.data, type: 'success' } });
          if (paid - price === 0) dispatch({ state: ACTION_STATES.DONE });
          else dispatch({ state: ACTION_STATES.PAYMENT, payload: 0 });
        }).catch(() => {
          dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Machine is out of service, your money is gone', type: 'error' } });
        });
    } else {
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Insufficient funds', type: 'error' } });
    }
  };

  return (
    <Card title="Choose Your Drink">
      <div className={classes.wrapper}>
        <div className={classes.drinks}>
          {DRINKS.map((drink) => (
            <Button key={drink.key} onClick={onBuy(drink.price)} shape="round" size="large" icon={drink.icon}>{`${drink.label} - ${drink.price} ₪`}</Button>))}
        </div>
      </div>
    </Card>
  );
};

export default DrinkChooser;
