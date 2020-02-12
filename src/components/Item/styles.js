import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: grid;
  width: ${props => props.width}px;
`;

export const TimeContainer = styled(animated.div)``;
export const ConfirmContainer = styled(animated.div)``;
