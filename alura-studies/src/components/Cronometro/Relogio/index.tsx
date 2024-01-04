import React from "react";
import style from './Relogio.module.scss';

interface Props {
  tempo : Number | undefined
}

export default function Relogio({tempo = 0} : Props){
    return(
      <>
        <span className={style.relogioNumero}>0</span>  
        <span className={style.relogioNumero}>0</span>  
        <span className={style.relogioDivisao}>:</span>  
        <span className={style.relogioNumero}>0</span>  
        <span className={style.relogioNumero}>0</span>
      </>   
    )
}