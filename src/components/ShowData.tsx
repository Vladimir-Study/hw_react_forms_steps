import style from '../css/showCanvas.module.css'
import { ShowBlock } from "./ShowBlock"
import { IForm } from "./Type"

export function ShowData({data}: Array<IForm>) {
  return (
    <div className={style.showBlockData}>
      <div className={style.showHeaders}>
        <p>Дата (ДД.ММ.ГГГ)</p>
        <p>Пройдено км.</p>
        <p>Действия</p>
      </div>
      <div className={style.showData}>
        {data.map(dataInfo => <ShowBlock dataInfo={dataInfo} />)}
      </div>
    </div>
  )
}
