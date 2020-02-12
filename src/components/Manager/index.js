import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Item from '../Item';

// TODO: Controlar o que está em seleção e o que não está via Context
// const SelectedItemContext = React.createContext('');

export const Manager = props => {
  return (
    <div>
      {props.items.map(item => (
        <Container key={item.id}>
          <Item text={item.text} width={props.width} onClick={item.onClick}>
            {props.text}
          </Item>
        </Container>
      ))}
    </div>
  );
};

Manager.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  width: PropTypes.number
};
