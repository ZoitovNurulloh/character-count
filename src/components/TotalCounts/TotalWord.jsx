import { useContext } from 'react';
import './TotalCounts.css';
import { GlobalContext } from '../../Context/GlobalContext';

const TotalWord = () => {
  const {totalWord} = useContext(GlobalContext)
  return (
    <div className='total-count'>
      <div className="total-count__container word">
        <h3 className='total-count__count'>{totalWord === 0 ? '00' : totalWord}</h3>
        <p className='total-count__info'>Total Word</p>
      </div>
    </div>
  )
}

export default TotalWord