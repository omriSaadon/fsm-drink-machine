# Welcome to The Drink Machine implemented with FSM

## [Click me for a demo]
##### This project is handling the states of the drink machine while using a custom hook for handling the FSM (Finite State Machine).

### The states for the drink machine are:
###### 1. **Idle** - The drink machine is not serving anyone.
###### 2. **Ordering** - One or few coins were inserted into the machine.
###### 3. **Delivery** - The customer chose a drink and the drink machine is delivering his choice.

### The action the machine can handle:
###### 1. **Payment** - Will lead to Ordering state
###### 2. **Cancel** - Will lead to Idle state
###### 3. **Purchase** - Will lead to Delivery state
###### 4. **Done** - Will lead to Idle state

#

#### The Drink machine is using a custom hook for state management - UseFsm.
#### The useFsm is a folder but can be plugged easily as a standalone repository.
##### UseFsm receives an object that specificies the machine states and context, for example:
#
```
const spec = {
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
```

### Tech stack:
* React with Hooks
* Store management by reactContext.
* ant-design for main componsnts such as button and alert.
* react-flow for the interactive chart
* axios for server calling

 [Click me for a demo]: <https://omrisaadon.github.io/fsm-drink-machine/>
