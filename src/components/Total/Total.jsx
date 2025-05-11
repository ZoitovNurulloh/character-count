import TotalChar from '../TotalCounts/TotalChar';
import TotalSentence from '../TotalCounts/TotalSentence';
import TotalWord from '../TotalCounts/TotalWord';
import './Total.css';

const Total = () => {
  return (
    <div className='total'>
      <TotalChar/>
      <TotalWord/>
      <TotalSentence/>
    </div>
  )
}

export default Total