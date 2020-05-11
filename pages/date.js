import Head from 'next/head'
import { DatePicker } from 'antd';

const Date = () => {
    
    function onChange(date, dateString) {
        console.log(date, dateString);
      }
  return (
    <div >
      <DatePicker onChange={onChange} />
    </div>
  )
}
export default Date