import LetterForm from '../../LetterForm/LetterForm';
import LetterDensity from '../LetterDensity/LetterDensity';
import Total from '../Total/Total';
import './Main.css';

const Main = () => {
  return (
    <div className='main-layout'>
      <div className="main-layout__container container">
        <h2 className='main-layout__heading'>
          Analyze your text in real-time.
        </h2>
        <LetterForm/>
        <Total/>
        <LetterDensity/>
      </div>
    </div>
  )
}

export default Main