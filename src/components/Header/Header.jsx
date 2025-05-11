import { useContext } from 'react';
import './Header.css';
import ThemeButton from '../Buttons/ThemeButton';
import { GlobalContext } from '../../Context/GlobalContext';

const Header = () => {
  const {showLogo} = useContext(GlobalContext);

  return (
    <header className='header'>
      <div className="header__container container">
        <a href="#" className='header__logo logo'>
          <img className='logo__img' src={showLogo ? "/public/images/logo-light-theme.svg" :
            "/public/images/logo-dark-theme.svg"} alt="Logo" />
        </a>
        <ThemeButton/>
      </div>
    </header>
  )
}

export default Header