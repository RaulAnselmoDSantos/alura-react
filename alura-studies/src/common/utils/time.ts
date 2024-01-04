
export  function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");
   

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    const  tempoSaida = horasEmSegundos + minutosEmSegundos + Number(segundos) ;
    return tempoSaida;
}

export function segundosParaHoras(tempoSaida : string){
    console.log(tempoSaida);
}