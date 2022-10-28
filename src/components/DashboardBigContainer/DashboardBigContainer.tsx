// STYLES
import * as styled from './DashboardBigContainerStyled';
import { IProps } from './DashboardBigContainerModel';

// LIBRARIES

// MISC

// REDUX

// COMPONENTS
import ProjectCard from 'components/ProjectCard/ProjectCard';
import PersonCard from 'components/PersonCard/PersonCard';

const DashboardBigContainer = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS
  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.BigContainer>
      <styled.TitleContainer>
        <styled.TitleText>{props.titleText}</styled.TitleText>
      </styled.TitleContainer>
      <styled.ProjectsContainer>
        {props.lists.map((list) => {
          return props.switchCard ? (
            <PersonCard name={list.name} description={list.description} />
          ) : (
            <ProjectCard
              name={list.name}
              description={list.description}
              date={list.date}
            />
          );
        })}
      </styled.ProjectsContainer>
    </styled.BigContainer>
  );
};

export default DashboardBigContainer;
