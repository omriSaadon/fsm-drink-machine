import React from 'react';
import DrinkChooser from 'components/DrinkChooser/DrinkChooser';
import Budget from 'components/Budget/Budget';
import DrinkFlowChart from 'components/DrinkFlowChart/DrinkFlowChart';
import OrderStatus from 'components/OrderStatus/OrderStatus';
import Payment from 'components/Payment/Payment';
import FsmStoreProvider from 'store/FsmStore';
import machineSpec from 'constants/machine-specification';
import NotificationStatus from 'components/Notifications/NotificationStatus';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import classes from './DrinkMachine.scss';

const DrinkMachine = () => {
  const components = [Payment, Budget, DrinkChooser, OrderStatus];
  return (
    <FsmStoreProvider machineSpec={machineSpec}>
      <NotificationStatus />
      <div className={classes.wrapper}>
        <img className={classes.img} alt="drink" src={`${process.env.PUBLIC_URL}/assets/images/drink.jpg`} />
        <div className={classes.cards}>
          {components.map((Component) => <CardWrapper key={Component.name}><Component /></CardWrapper>)}
        </div>
      </div>
      <DrinkFlowChart />
    </FsmStoreProvider>
  );
};

export default DrinkMachine;
