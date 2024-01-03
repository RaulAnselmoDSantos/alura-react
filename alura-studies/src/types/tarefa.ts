import { v4 as uuidv4} from 'uuid';

export interface Itarefa {
    tarefa: string,
    tempo : string,
    selecionado : boolean,
    completado : boolean,
    id: string
  }

  export const mockData = [
    {
      tarefa: 'React',
      tempo: '02:00:00',
      selecionado: false,
      completado: false,
      id: uuidv4()
    }, 
    {
      tarefa: 'Javascript',
      tempo: '01:00:00',
      selecionado: false,
      completado: false,
      id: uuidv4()
    }, 
    {
      tarefa: 'Typescript',
      tempo: '03:00:00',
      selecionado: false,
      completado: false,
      id: uuidv4()
    }
   ];
  