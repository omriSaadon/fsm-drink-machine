import {
  makePayment, addBudget, cancelPayment, makePurchase, addMessage,
} from 'store/fsm_reducer';
import { INITIAL_BUDGET, STATES, ACTION_STATES } from '.';

export default {
  initialState: {
    state: STATES.IDLE,
    context: {
      currentBudget: INITIAL_BUDGET,
      paid: 0,
      message: '',
    },
  },
  generalActions: {
    addBudget,
    addMessage,
  },
  states: {
    [STATES.IDLE]: {
      [ACTION_STATES.PAYMENT]: {
        next: STATES.ORDERING,
        action: makePayment,
      },
    },
    [STATES.ORDERING]: {
      [ACTION_STATES.CANCEL]: {
        next: STATES.IDLE,
        action: cancelPayment,
      },
      [ACTION_STATES.PURCHASE]: {
        next: STATES.DELIVERY,
        action: makePurchase,
      },
      [ACTION_STATES.PAYMENT]: {
        next: STATES.ORDERING,
        action: makePayment,
      },
    },
    [STATES.DELIVERY]: {
      [ACTION_STATES.DONE]: {
        next: STATES.IDLE,
      },
      [ACTION_STATES.PAYMENT]: {
        next: STATES.ORDERING,
        action: makePayment,
      },
    },
  },
};
