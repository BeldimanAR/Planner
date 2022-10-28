import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProjectContent from 'components/ProjectsContent/ProjectsContent';
// STYLES
import * as styled from './ProjectsPageStyled';
// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const ProjectsPage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        aria-label="nav tabs example"
        textColor="secondary"
        className="tab-list-mui"
      >
        <Tab label="IN PROGRESS" value="1" className="styled.buttonTab" />
        <Tab label="PENDING" value="2" />
        <Tab label="DONE" value="3" />
      </TabList>

      <TabPanel value="1">
        <styled.ProjectsPageContainer>
          <ProjectContent
            title="Project Test 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
          <ProjectContent
            title="Project Test 2"
            description="description"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
          <ProjectContent
            title="Project Test 3"
            description="description"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
          <ProjectContent
            title="Project Test 4"
            description="description"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
          <ProjectContent
            title="Project Test 5"
            description="description"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
        </styled.ProjectsPageContainer>
      </TabPanel>
      <TabPanel value="2">
        <styled.ProjectsPageContainer>
          <ProjectContent
            title="Project Test 1"
            description="description"
            startDate="23/01/2022"
            deadline="23/07/2022"
          />
        </styled.ProjectsPageContainer>
      </TabPanel>
      <TabPanel value="3">yOUR bOY</TabPanel>
    </TabContext>
  );
};

export default ProjectsPage;
