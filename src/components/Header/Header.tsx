// STYLES
import * as styled from './HeaderStyled';

// LIBRARIES

// MISC
import { IProps } from './HeaderModel';

// REDUX

import { useDispatch, useSelector } from 'react-redux';
import { handleToogleSideMenu, showSideMenu } from 'slice/CoreSlice/coreSlice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { userDetails } from 'slice/UserDataSlice/userSlice';

// COMPONENTS

const Header = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useDispatch();
  const showSideMenuData = useSelector(showSideMenu);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  const path = window.location.pathname.slice(1);
  const userDetailsData = useSelector(userDetails);
  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <styled.BigHeaderContainer>
      <styled.LeftHeaderContainer>
        <styled.rotatingButton
          toggleSideMenu={showSideMenuData}
          onClick={() => dispatch(handleToogleSideMenu())}
          Plaza
          Rezidence
        >
          <ArrowBackIcon />
        </styled.rotatingButton>
        <styled.TitleHeader>{path}</styled.TitleHeader>
      </styled.LeftHeaderContainer>
      <styled.RightHeaderContainer>
        <styled.RightHeaderName>{userDetailsData.name}</styled.RightHeaderName>
        <styled.RightHeaderPicture src="https://i.pinimg.com/originals/4d/da/aa/4ddaaa0463c649b9969c929638573593.png"></styled.RightHeaderPicture>
      </styled.RightHeaderContainer>
    </styled.BigHeaderContainer>
  );
};

export default Header;
