// STYLES
import * as styled from './ProjectCardStyled';
import { IProps } from './ProjectCardModel';

// LIBRARIES
import InventoryIcon from '@mui/icons-material/Inventory';
// MISC

// REDUX

// COMPONENTS

const ProjectCard = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.ProjectCardContainer>
      <styled.ProjectCardIcon>
        <InventoryIcon fontSize="large" />
      </styled.ProjectCardIcon>
      <styled.ProjectCardDetails>
        <styled.ProjectCardFirstDetails>
          <styled.ProjectCardName>{props.name}</styled.ProjectCardName>
          <styled.ProjectCardDescription>
            {props.description}
          </styled.ProjectCardDescription>
        </styled.ProjectCardFirstDetails>
        <styled.ProjectCardLabel>
          <styled.DateContainer>{props.date}</styled.DateContainer>
        </styled.ProjectCardLabel>
      </styled.ProjectCardDetails>
    </styled.ProjectCardContainer>
  );
};

export default ProjectCard;
