import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@atlaskit/button';
import { useSpring } from 'react-spring';
import { Container, TimeContainer, ConfirmContainer } from './styles';

const Item = props => {
  const [isExpanded, setExpanded] = useState(true);

  const buttonTimeWithAnimationStyle = useSpring({
    width: isExpanded ? `${props.width}px` : `${props.width / 2 - 3}px`,
    gridRow: 1
  });

  const buttonConfirmWithAnimationStyle = useSpring({
    width: isExpanded ? '0px' : `${props.width / 2 - 3}px`,
    visibility: isExpanded ? 'hidden' : 'visible',
    gridRow: 1,
    marginRight: 0
  });

  return (
    <Container width={props.width}>
      <TimeContainer
        style={buttonTimeWithAnimationStyle}
        onClick={() => setExpanded(!isExpanded)}
      >
        <Button shouldFitContainer>{props.text}</Button>
      </TimeContainer>
      <ConfirmContainer
        style={buttonConfirmWithAnimationStyle}
        onClick={props.onClick}
      >
        <Button shouldFitContainer>{props.confirmText}</Button>
      </ConfirmContainer>
    </Container>
  );
};

Item.propTypes = {
  width: PropTypes.number,
  text: PropTypes.string,
  confirmText: PropTypes.string,
  onClick: PropTypes.func
};

Item.defaultProps = {
  confirmText: 'Confirmar'
};

export default Item;
