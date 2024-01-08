import { v4 as uuidv4} from 'uuid';

export interface Itarefa {
    tarefa: string,
    tempo : string,
    selecionado : boolean,
    completado : boolean,
    id: string
  }