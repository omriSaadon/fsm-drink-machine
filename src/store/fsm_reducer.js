export const makePayment = (context, payload) => ({
  ...context,
  currentBudget: context.currentBudget - payload,
  paid: context.paid + payload,
});

export const addBudget = (context, payload) => ({
  ...context,
  currentBudget: context.currentBudget + payload,
});

export const makePurchase = (context, payload) => ({
  ...context,
  paid: context.paid - payload,
});

export const cancelPayment = (context) => ({
  ...context,
  currentBudget: context.currentBudget + context.paid,
  paid: 0,
});

export const addMessage = (context, { message, type }) => ({
  ...context,
  message,
  messageType: type,
});

const getContext = (state) => state.context;
export const getCurrentBudget = (state) => getContext(state).currentBudget;
export const getPaid = (state) => getContext(state).paid;
export const getMachineStatus = (state) => state.state;
export const getMessage = (state) => getContext(state).message;
export const getMessageType = (state) => getContext(state).messageType;
