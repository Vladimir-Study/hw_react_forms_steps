import style from '../css/showCanvas.module.css'

export function ShowBlock({dataInfo}) {

  return (
    <div className={style.renderData}>
      <p>{dataInfo.date}</p>
      <p>{dataInfo.way}</p>
      <div className={style.editElems}>
        <span className="material-icons">
          edit
        </span>
        <span className="material-icons">
          highlight_off
        </span>
      </div>
    </div>
  )
}
