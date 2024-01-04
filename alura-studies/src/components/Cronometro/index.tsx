import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import {tempopParaSegundos} from '../../common/utils/time';
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";


interface Props {
    selecionado : Itarefa | undefined
}

export default function Cronometro({selecionado}: Props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempopParaSegundos(selecionado?.tempo))
        }
    },[selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometrô</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}