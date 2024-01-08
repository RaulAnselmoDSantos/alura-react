import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { SetStateAction, useEffect, useState } from "react";

interface Props {
  continua: boolean;
  selecionado: Itarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro1({
  selecionado,
  finalizarTarefa,
  continua,
}: Props) {
  const [tempo, setTempo] = useState<number>();
  const [iniciar, setIniciar] = useState<boolean>(false);
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
      setIniciar(false);
    }
  }, [selecionado]);

  function pararCronometro(contador: number = 0) {
    console.log("Apertado", iniciar);
    setIniciar(false);
  }

  function iniciarCronometro(contador: number = 0) {
    setTempo(contador - 1);
    setIniciar(true);
  }
  useEffect(() => {
    if (tempo && iniciar) {
      setTimeout(contador, 1000);
    }
  }, [tempo, iniciar]);

  function contador() {
    if (tempo) {
      const novoTempo = tempo - 1;
      setTempo(novoTempo);
      if (novoTempo == 0) {
        finalizarTarefa();
      }
    }
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometrô</p>
      Tempo:{tempo}
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <div className={style.botoesWrapper }>
        <Botao
            onClick={() => {
            iniciarCronometro(tempo);
            }}
        >
            Começar!
        </Botao>
        
        <Botao
            onClick={() => {
            pararCronometro(tempo);
            }}
        >Parar!
        </Botao>
    </div>
    </div>
  );
}
