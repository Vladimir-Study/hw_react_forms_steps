import React from 'react';
import style from '../css/showCanvas.module.css'

export function ShowBlock({index, dataInfo, deleteData, data}) {

  const handlerDelete = () => {
    deleteData([...data.slice(0, index), ...data.slice(index + 1)])
  }

  return (
    <div className={style.renderData}>
      <p>{dataInfo.date}</p>
      <p>{dataInfo.way}</p>
      <div className={style.editElems}>
        <span className="material-icons">
          edit
        </span>
        <span className="material-icons" onClick={handlerDelete}>
          highlight_off
        </span>
      </div>
    </div>
  )
}
