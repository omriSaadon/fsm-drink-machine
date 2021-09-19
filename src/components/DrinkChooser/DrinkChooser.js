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
      // In this case, purchasing while already delivering other product is forbidden and an error message will appear.
      dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Please wait until delivery is finished', type: 'error' } });
    } else if (paid - price >= 0) {
      // In case we purchased a product but still has paid money to the machine, the state should be Ordering as we can order more products.
      dispatch({ state: ACTION_STATES.PURCHASE, payload: price });
      // Calling to a mock server which has delay of few seconds.
      axios.post('https://fsmmock.free.beeceptor.com', { price })
        .then((res) => {
          dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: res.data, type: 'success' } });
          if (paid - price === 0) dispatch({ state: ACTION_STATES.DONE }); // If paid is zero, we should move to Idle state.
          else dispatch({ state: ACTION_STATES.PAYMENT, payload: 0 }); // If paid is bigger than zero, payment state should take place.
        }).catch(() => {
          dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: 'Machine is out of service, your money is gone', type: 'error' } });
        });
    } else {
      // If trying to purchase a product which we didn't pay enough money for, an error message will appear.
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
