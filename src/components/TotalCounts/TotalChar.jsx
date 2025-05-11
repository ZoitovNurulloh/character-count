import { useContext } from 'react';
import './TotalCounts.css';
import { GlobalContext } from '../../Context/GlobalContext';

const TotalChar = () => {
  const {totalChar} = useContext(GlobalContext);
  return (
    <div className='total-count'>
      <div className="total-count__container char">
        <h3 className='total-count__count'>{totalChar === 0 ? "00" : totalChar}</h3>
        <p className='total-count__info'>Total Characters</p>
      </div>
    </div>
  )
}

export default TotalChar;