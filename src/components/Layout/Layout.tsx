// STYLES
import * as styled from './LayoutStyled';

// LIBRARIES

// MISC
import { IProps } from './LayoutModel';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';

// REDUX
import { useSelector } from 'react-redux';
import { showSideMenu } from 'slice/CoreSlice/coreSlice';
// COMPONENTS

const Layout = (props: IProps) => {
  const showSideMenuData = useSelector(showSideMenu);
  console.log(showSideMenuData);

  // PROPS
  const { children, showHeader = true, showSide = true } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS
  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <styled.LayoutContainer>
      {showSide && (
        <styled.LayoutSide toggleMinimize={showSideMenuData}>
          <SideMenu />
        </styled.LayoutSide>
      )}
      <styled.BigContainerWrapper>
        {showHeader && (
          <styled.LayoutHeader>
            <Header />
          </styled.LayoutHeader>
        )}
        <styled.LayoutMiddleContainer>{children}</styled.LayoutMiddleContainer>
      </styled.BigContainerWrapper>
    </styled.LayoutContainer>
  );
};

export default Layout;
