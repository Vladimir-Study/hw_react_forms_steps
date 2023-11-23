import React, { useState } from 'react'
import style from '../css/form.module.css'
import { IForm, arrayData } from './Type'

export function GetData({updateFanc}) {

  const [formData, getData] = useState<IForm>({
    date: '',
    way: 0
  })
  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateFanc(formData);
  }

  const handlerOfChange = ({target}) => {
    const {name, value} = target;
    getData({...formData, [name]: name === 'way'?Number(value):value})
  }

  return (
    <form className={ style.getDataForm } onSubmit={handlerOnSubmit}>
      <div className={ style.dataField }>
        <label htmlFor="date">Дата ДД.ММ.ГГГГ</label>
        <input id="date" name="date" type="date" onChange={handlerOfChange}/>
      </div>
      <div className={ style.wayField }>
        <label htmlFor="way">Пройдено, км.</label>
        <input id='way' type="number" name="way" onChange={handlerOfChange}/>
      </div>
      <button type="submit">OK</button>
    </form>
  )
}
