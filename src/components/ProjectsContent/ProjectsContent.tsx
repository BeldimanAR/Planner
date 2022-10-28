// STYLES
import * as styled from './ProjectsContentStyled';
import { IProps } from './ProjectsContentModel';
import GroupIcon from '@mui/icons-material/Group';

// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const ProjectContent = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.Container>
      <styled.LeftContainer>
        <styled.LeftUpDetails>
          <styled.TitleContainer>{props.title}</styled.TitleContainer>
          <styled.DescriptionContainer>
            {props.description}
          </styled.DescriptionContainer>
        </styled.LeftUpDetails>
        <styled.LeftDownDetails>
          <styled.StartingDateContainer>
            Start: {props.startDate}
          </styled.StartingDateContainer>
          <styled.DeadlineDateContainer>
            Deadline: {props.deadline}
          </styled.DeadlineDateContainer>
        </styled.LeftDownDetails>
      </styled.LeftContainer>
      <styled.RightContainer>
        <styled.IconContainer>
          <GroupIcon />
        </styled.IconContainer>
      </styled.RightContainer>
    </styled.Container>
  );
};
export default ProjectContent;
