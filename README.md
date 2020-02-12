# picker-time

[![npm package][npm-badge]][npm]

A simple React component, initially developed to create a schedule time table but you can use it for other purposes.

![picker-time](https://media.giphy.com/media/J5vYM2PoAgYaOjHhSF/giphy.gif)

## How to use ?

### First install the package:

```sh
$ yarn add picker-time
```

or:

```sh
$ npm install picker-time
```

### Example

```javascript
import React from 'react';
import { render } from 'react-dom';
import PickerTime from 'picker-time';

const items = [
  {
    id: '1',
    text: '10:00',
    onClick: () => alert('10:00')
  },
  {
    id: '2',
    text: '11:00',
    onClick: () => alert('11:00')
  },
  {
    id: '3',
    text: '12:00',
    onClick: () => alert('12:00')
  }
];

const Demo = () => (
  <>
    <h1>picker-time Demo</h1>
    <PickerTime items={items} width={500} />
  </>
);
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/picker-time
