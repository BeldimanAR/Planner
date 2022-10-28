// STYLES
import * as styled from './MiniCardStyled';
import { IProps } from './MiniCardModel';

// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const MiniCard = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.MiniCardContainer color={props.color}>
      <styled.UpperContainer></styled.UpperContainer>
      <styled.UpperContainer>
        <styled.IconContainer color={props.color}>
          {props.icon}
        </styled.IconContainer>
      </styled.UpperContainer>

      <styled.BottomContainer>
        <styled.NumberMiniCard>{props.number}</styled.NumberMiniCard>
        <styled.NameMiniCard>{props.name}</styled.NameMiniCard>
      </styled.BottomContainer>
    </styled.MiniCardContainer>
  );
};
export default MiniCard;
