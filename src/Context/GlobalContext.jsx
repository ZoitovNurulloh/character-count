import { createContext, useReducer, useState } from "react";

export const GlobalContext = createContext();

function countWords(text) {
  return text.trim().split(/\s+/).filter(word => word !== "").length;
}

function sentenceCount(text) {
  return text.split(/[.!?]/).filter(s => s.trim().length > 0).length;
}

function setTotalChar(text, bool) {
    return bool ? text.split("").filter(t => t !== " ").length : text.length;
}

const initialData = {
  text:"",
  totalChar:0,
  totalWord:0,
  totalSentence:0,
  excludeSpaces:false,
  setCharacterLimit:false,
}


const reducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case "TEXT":
      return  {
        ...state,
        text: payload,
        totalChar: setTotalChar(payload, state.excludeSpaces),
        totalSentence: sentenceCount(payload),
        totalWord: countWords(payload),
      }

    case "EXCLUDE-SPACES":
      return {...state, excludeSpaces:payload, totalChar:setTotalChar(state.text, payload)}

    case "SET-CHARACTER-LIMIT":
      return {...state, setCharacterLimit:payload}
    default:
      return state;
  }
}



export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const [lightTheme, setLightTheme] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const charLimit = state.setCharacterLimit && state.totalChar >= 300;

  const toggleTheme = () => {
    setLightTheme(prev => !prev);
    setShowLogo(prev => !prev)
  document.body.classList.toggle("dark")
}

  return <GlobalContext.Provider value={{
    ...state,
    dispatch,
    toggleTheme,
    lightTheme,
    showLogo,
    charLimit
    }}>
    {children}
  </GlobalContext.Provider>
}
