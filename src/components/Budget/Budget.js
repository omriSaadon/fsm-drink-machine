import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useStore } from 'store/FsmStore';
import { getCurrentBudget } from 'store/fsm_reducer';
import { GENERAL_ACTIONS } from 'constants/index';
import { useCountdown } from 'custom-hooks/useCountdown';
import classes from './Budget.scss';

const DEPOSIT_TIME = 10;
const ADD_BUDGET = 10;

const Budget = () => {
  const [nextDeposit] = useCountdown(DEPOSIT_TIME);
  const [state, dispatch] = useStore();

  const currentBudget = getCurrentBudget(state);

  useEffect(() => {
    // Each ADD_BUDGET time, we get new money into our budget/wallet.
    if (nextDeposit - 1 === 0) dispatch({ generalAction: GENERAL_ACTIONS.ADD_BUDGET, payload: ADD_BUDGET });
  }, [nextDeposit]);

  return (
    <Card className={classes.card} title="Wallet">
      <div>{`Current Budget: ${currentBudget} ₪`}</div>
      <div>{`Next Deposit: ${nextDeposit}`}</div>
    </Card>
  );
};

export default Budget;
