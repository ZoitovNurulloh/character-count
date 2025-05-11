import { useContext } from 'react';
import './TotalCounts.css';
import { GlobalContext } from '../../Context/GlobalContext';

const TotalSentence = () => {
  const {totalSentence} = useContext(GlobalContext)
  return (
    <div className='total-count'>
      <div className="total-count__container sentence">
        <h3 className='total-count__count'>{totalSentence === 0 ? "00" : totalSentence}</h3>
        <p className='total-count__info'>Sentence Count</p>
      </div>
    </div>
  )
}

export default TotalSentence;