// STYLES
import * as styled from './ButtonAtomStyled';

// LIBRARIES

// MISC
import { IProps } from './ButtonAtomModel';

// REDUX
import { useSelector } from 'react-redux';
import { showSideMenu } from 'slice/CoreSlice/coreSlice';
// COMPONENTS

const ButtonAtom = (props: IProps) => {
  // PROPS
  const {
    buttonText = '',
    imgIcon,
    isSelected,
    onClick,
    id,
    type,
    styles,
  } = props;

  // CONSTANTS USING LIBRARIES
  const showSideMenuData = useSelector(showSideMenu);
  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.SideMenuButtonContainer
      isSelected={isSelected}
      toggleMinimize={showSideMenuData}
      styles={styles}
      onClick={onClick}
      id={id}
      type={type}
    >
      {imgIcon}
      {!showSideMenuData && <span>{buttonText}</span>}
    </styled.SideMenuButtonContainer>
  );
};

export default ButtonAtom;
