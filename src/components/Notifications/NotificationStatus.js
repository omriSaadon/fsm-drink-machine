import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { useStore } from 'store/FsmStore';
import { getMessageType, getMessage } from 'store/fsm_reducer';
import { GENERAL_ACTIONS } from 'constants/index';
import classes from './NotificationStatus.scss';

const NotificationStatus = () => {
  const [state, dispatch] = useStore();

  const message = getMessage(state);
  const messageType = getMessageType(state);

  const onClose = () => {
    dispatch({ generalAction: GENERAL_ACTIONS.ADD_MESSAGE, payload: { message: '', type: null } });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className={classes.notification}>
      {message
            && (
            <Alert
              message={message}
              type={messageType}
              closable
              onClose={onClose}
            />
            )}
    </div>

  );
};

export default NotificationStatus;
