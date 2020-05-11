import Head from 'next/head'
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/th_TH';
import { DatePicker } from 'antd';

const Date = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    function onChange(date, dateString) {
        console.log(date, dateString);
      }
  return (
    <div >

      <DatePicker locale={locale} />
      <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    </div>
  )
}
export default Date