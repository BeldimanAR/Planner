// STYLES
import * as styled from './SideMenuStyled';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

// LIBRARIES

// MISC
import { ISideMenuBtns } from './SideMenuModel';
import ButtonAtom from 'components/Atoms/ButtonAtom/ButtonAtom';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { showSideMenu } from 'slice/CoreSlice/coreSlice';
import { handleToogleLoginCheck } from 'slice/LoginCheckSlice/LoginCheckSlice';
import { resetToogleSideMeny } from 'slice/CoreSlice/coreSlice';

const SideMenu = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSideMenuData = useSelector(showSideMenu);
  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  const onNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  const sideMenuBtnsData: ISideMenuBtns[] = [
    {
      btnText: 'Dashboard',
      handleClickFunc: () => onNavigate('dashboard'),
      icon: <DashboardIcon />,
      selected: window.location.pathname === '/dashboard',
    },
    {
      btnText: 'Projects',
      handleClickFunc: () => onNavigate('projects'),
      icon: <AccountTreeIcon />,
      selected: window.location.pathname === '/projects',
    },
    {
      btnText: 'Persons',
      handleClickFunc: () => onNavigate('persons'),
      icon: <GroupIcon />,
      selected: window.location.pathname === '/persons',
    },
  ];

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleLogOutButton = () => {
    dispatch(handleToogleLoginCheck());
    dispatch(resetToogleSideMeny());
    navigate('/login');
  };
  return (
    <styled.SideMenuContainer>
      <styled.PageNameContainer toggleMinimize={showSideMenuData}>
        PLANNER
      </styled.PageNameContainer>
      <styled.MenuContainer>
        {!showSideMenuData && <styled.MenuTitle>Menu</styled.MenuTitle>}
        {sideMenuBtnsData.map((btn, index) => {
          return (
            <ButtonAtom
              buttonText={btn.btnText}
              imgIcon={btn.icon}
              isSelected={btn.selected}
              key={`side-menu-btns-list-${index}`}
              onClick={btn.handleClickFunc}
              id={`${index}`}
            />
          );
        })}
        <styled.LogOutBtn
          onClick={handleLogOutButton}
          toggleMinimize={showSideMenuData}
        >
          Log Out
        </styled.LogOutBtn>
      </styled.MenuContainer>
    </styled.SideMenuContainer>
  );
};

export default SideMenu;
