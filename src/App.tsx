import { useState } from 'react'
import './App.css'
import { GetData } from './components/GetData'
import { ShowData } from './components/ShowData'
import { IForm } from './components/Type'

function App() {

  let [allData, updateData] = useState<Array<IForm>>([])

  const sumWay:Array<IForm> = allData.filter((item) => item.date === Array.from(allData)[allData.length-1].date)
  if (sumWay.length >= 2) {
    const filtedDate:Array<IForm> = allData.filter((item) => item.date !== Array.from(allData)[allData.length-1].date)
    const resultWay:IForm = {
      date: sumWay[0].date,
      way: sumWay[0].way+sumWay[1].way
    }
    filtedDate.push(resultWay);
    allData = filtedDate;
  }

  return (
    <>
      < GetData updateFanc={updateData} data={allData}/>
      < ShowData data={allData} deleteData={updateData}/>
    </>
  )
}

export default App
