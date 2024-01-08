import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import {tempoParaSegundos} from '../../common/utils/time';
import { Itarefa } from "../../types/tarefa";
import { SetStateAction, useEffect, useState } from "react";


interface Props {
    continua : boolean,
    selecionado : Itarefa | undefined,
    finalizarTarefa: () => void
    
}

export default function Cronometro1({selecionado, finalizarTarefa, continua}: Props){
    const [tempo, setTempo] = useState<number>();
    const [continuaContagem, setcontinuaContagem] = useState<boolean>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado]);

    function regressiva(contador: number = 0, continuaContagem : boolean){
            setTimeout(() => {
                if(continuaContagem && contador > 0 ) {
                    setTempo(contador - 1);
                    return regressiva(contador - 1, continuaContagem);
                    }else setcontinuaContagem(false); 
                if(contador === 0) finalizarTarefa();
                
            }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometrô</p>
            Tempo:{tempo}
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo, true)}>
                Começar!
            </Botao>
            <Botao onClick={() => regressiva(tempo, false)}>
                Parar!
            </Botao>
            
        </div>
    )
}