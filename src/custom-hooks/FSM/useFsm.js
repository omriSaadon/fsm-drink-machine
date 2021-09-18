import { useReducer } from 'react';

const FsmReducer = (machineSpec) => (currentState, action) => {
  if (action.generalAction) {
    const generalAction = machineSpec.generalActions[action.generalAction];
    if (!generalAction) throw new Error(`No such general action ${action.generalAction}`);
    const context = generalAction(currentState.context, action.payload);
    return { state: currentState.state, context };
  }

  const stateOptions = machineSpec.states[currentState.state];

  if (!stateOptions) throw new Error(`No such state ${currentState.state}`);

  const newState = stateOptions[action.state];

  if (!newState) throw new Error(`No such action ${action} for ${currentState}`);

  const context = newState.action ? newState.action(currentState.context, action.payload) : currentState.context;
  return { state: newState.next, context };
};

export const useFsm = (machineSpec) => (
  useReducer(FsmReducer(machineSpec), machineSpec.initialState)
);
