import { format }  from 'date-fns';

class FSWDateHandler {

    // Retorna a data atual em formato de string (G5)
    currentDateG5Format(): string {
       return format(new Date(), 'dd/MM/yyyy');
    }
    
    // Retorna a hora atual em formato de número (G5)
    currentHourG5Format(): number {
        const now = new Date();
        const hours = now.getHours()
        const minutes = now.getMinutes();
        return (hours * 60) + minutes;
    }

    // Formata uma data JavaScript no formato de string da G5
    jsDateToG5StringFormat(jsDate: Date): string {
        return format(jsDate, 'dd/MM/yyyy');
    }

    // Formata hora em formato da G5 em string
    g5HourToString(g5Hour: number): string {
        const totalHour = g5Hour / 60;
        const hour = Math.trunc(totalHour).toString().padStart(2, '0');
        const minutes = Math.trunc((totalHour - parseInt(hour)) * 60).toString().padStart(2, '0');
        return `${hour}:${minutes}`;
    }

    // Retorna a data nula da G5 (31/12/1900)
    nullDateG5Format(): string {
        return format(new Date(1900, 11, 31), 'dd/MM/yyyy');
    }

}

export default FSWDateHandler;

