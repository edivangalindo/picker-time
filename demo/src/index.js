import React from 'react';
import { render } from 'react-dom';
import PickerTime from '../../src';

const items = [
  {
    id: '1',
    text: '10:00',
    onClick: () => {
      alert('10:00');
    }
  },
  {
    id: '2',
    text: '11:00',
    onClick: () => {
      alert('10:00');
    }
  },
  {
    id: '3',
    text: '12:00',
    onClick: () => {
      alert('10:00');
    }
  }
];

const Demo = () => (
  <div>
    <h1>picker-time Demo</h1>
    <PickerTime items={items} width={500} />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
