import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Itarefa } from '../../types/tarefa';
import { v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
  state = {
    tarefa : "",
    tempo  : "00:00",
    selecionado: false,
    completado: false,
    id: uuidv4()
  }

  constructor(props: {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
  }) {
    super(props);
 
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (this.props) {
      this.props.setTarefas(tarefasAntigas => 
        [...tarefasAntigas, 
          {
            tarefa: this.state.tarefa,
            tempo: this.state.tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
          
          }
        ]
      );
      this.setState({
        tarefa: "",
        tempo: "00:00"
      })
    } else {
      console.error('Props não definidos');
    }
   }
   

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
            id="tempo"
            min="00:00:00"
            max="04:30:00"
            required
          />
        </div>
        <Botao type="submit">
            Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;