import style from '../css/showCanvas.module.css'
import { ShowBlock } from "./ShowBlock"

export function ShowData({data, deleteData}) {
  return (
    <div className={style.showBlockData}>
      <div className={style.showHeaders}>
        <p>Дата (ДД.ММ.ГГГ)</p>
        <p>Пройдено км.</p>
        <p>Действия</p>
      </div>
      <div className={style.showData}>
        {data.map((dataInfo, index) => <ShowBlock key={index} index={index} data={data} dataInfo={dataInfo} deleteData={deleteData} />)}
      </div>
    </div>
  )
}
