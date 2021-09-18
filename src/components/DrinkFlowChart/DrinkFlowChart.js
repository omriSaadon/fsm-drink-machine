import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { useStore } from 'store/FsmStore';
import { getMachineStatus } from 'store/fsm_reducer';
import { FLOW_INITIAL_ELEMENTS } from 'constants/index';
import classes from './DrinkFlowChart.scss';

const DrinkFlowChart = () => {
  const [elements, setElements] = useState(FLOW_INITIAL_ELEMENTS);
  const [state] = useStore();

  const drinkMachineStatus = getMachineStatus(state);

  useEffect(() => {
    const newElements = elements.map((element) => {
      if (element.id === drinkMachineStatus) {
        return { ...element, style: { background: '#D6D5E6' } };
      }
      return { ...element, style: { ...element.style, background: null } };
    });
    setElements(newElements);
  }, [state]);

  return (
    <div className={classes.flow}>
      <ReactFlow
        elements={elements}
        zoomOnScroll={false}
        nodesDraggable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        paneMoveable={false}
        nodesConnectable={false}
      />
    </div>
  );
};

export default DrinkFlowChart;
