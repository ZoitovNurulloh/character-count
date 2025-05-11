import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import './LetterForm.css'
const LetterForm = () => {
  let {dispatch, setCharacterLimit, charLimit} = useContext(GlobalContext);

  return (
    <form className='letter-form'>
      <div className="letter-form__textarea-inner">
        <textarea className={`letter-form__textarea ${charLimit && 'warning letter'}`}
        placeholder='Start typing here… (or paste your text)'
        onChange={(e) => dispatch({type:"TEXT", payload: e.target.value})}></textarea>
        <span className='letter-form__textarea-warning'>{charLimit &&'Limit reached! Your text exceeds 300 characters.'}</span>
      </div>
      <div className='letter-form__label-group'>
        <label className='letter-form__label'>
          <input className='letter-form__input' type="checkbox" onChange={e => dispatch({type: "EXCLUDE-SPACES", payload: e.target.checked})}/>
          <span className='checkmark'></span>
          Exclude Spaces
        </label>
        <label className='letter-form__label'>
          <input className='letter-form__input' type="checkbox" onChange={e => dispatch({type: "SET-CHARACTER-LIMIT", payload: e.target.checked})}/>
          <span className='checkmark'></span>
          Set Character Limit
        </label>
        <div className={setCharacterLimit ? 'letter-form__limit': 'letter-form__limit--dn'}>300</div>
      </div>
    </form>
  )
}

export default LetterForm