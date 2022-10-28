import React from 'react';

// STYLES
import * as styled from './HomePageStyled';

// LIBRARIES
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// MISC
import {
  deadlinesData,
  availablePersonsData,
  startDatesData,
} from 'mocks/dashboardMocks';
// REDUX
import {
  changeDashboardNumbers,
  personsNumber,
  projectsEnding,
  projectsStarting,
} from 'slice/DashboardNumbersUpdateSlice/DashboardNumbersSlice';

// COMPONENTS

import DashboardBigContainer from 'components/DashboardBigContainer/DashboardBigContainer';
import MiniCard from 'components/MiniCard/MiniCard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';

const HomePage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const dispatch = useDispatch();
  const showPersonsNumber = useSelector(personsNumber);
  const showProjectsEndingNumber = useSelector(projectsEnding);
  const showProjectsStartingNumber = useSelector(projectsStarting);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(changeDashboardNumbers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <styled.HomePageContainer>
      <MiniCard
        color="orange"
        name=" project in progress"
        number={showProjectsEndingNumber}
        icon={<AccountTreeIcon />}
      />
      <MiniCard
        color="darkblue"
        name=" project pending"
        number={showProjectsStartingNumber}
        icon={<AccountTreeIcon />}
      />
      <MiniCard
        color="green"
        name=" project done"
        number={1}
        icon={<AccountTreeIcon />}
      />
      <MiniCard
        color="red"
        name=" available persons"
        number={showPersonsNumber}
        icon={<GroupIcon />}
      />

      <DashboardBigContainer titleText="Deadlines" lists={deadlinesData} />
      <DashboardBigContainer titleText="Start dates" lists={startDatesData} />
      <DashboardBigContainer
        switchCard
        titleText="Available persons"
        lists={availablePersonsData}
      />
    </styled.HomePageContainer>
  );
};

export default HomePage;
