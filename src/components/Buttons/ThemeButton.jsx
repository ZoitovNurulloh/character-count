import { useContext } from 'react';
import './Buttons.css';
import { GlobalContext } from '../../Context/GlobalContext';


const ThemeButton = () => {
  const {toggleTheme, lightTheme} = useContext(GlobalContext);

  return (
    <button className="button button-theme" onClick={() => toggleTheme()}>
      {lightTheme ?
        <svg className="button__img" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><g clipPath="url(#a)"><path stroke="#12131A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>
        :
        <svg className="button__img" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><g clipPath="url(#a)"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.666 11H1.833m3.955-5.212L4.49 4.492m11.72 1.296 1.297-1.296M5.788 16.215 4.49 17.512m11.72-1.296 1.297 1.296M20.166 11h-1.833m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>
      }
    </button>
  )
}

export default ThemeButton