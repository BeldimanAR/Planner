// STYLES
import * as styled from './PersonCardStyled';

// LIBRARIES
import { IProps } from './PersonCardModel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // MISC
// REDUX

// COMPONENTS

const PersonCard = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.PersonCardContainer>
      <styled.PersonCardIcon>
        <AccountCircleIcon fontSize="large" />
      </styled.PersonCardIcon>
      <styled.PersonCardDetails>
        <styled.PersonCardFirstDetails>
          <styled.PersonCardName>{props.name}</styled.PersonCardName>
          <styled.PersonCardLabel>
            <styled.DateContainer>{props.description}</styled.DateContainer>
          </styled.PersonCardLabel>
        </styled.PersonCardFirstDetails>
      </styled.PersonCardDetails>
    </styled.PersonCardContainer>
  );
};

export default PersonCard;
