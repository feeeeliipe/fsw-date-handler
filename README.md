# FSW-DATE-HANDLER

Biblioteca para tratamento de data/hora com formato utilizado pelos sistemas Senior G5 em projetos JS. 

# Instalação

`npm i fsw-date-handler --save`

# Como utilizar

```
import FSWDateHandler from 'fsw-date-handler';

const dateHandler = new FSWDateHandler();

// Retorna a data atual no formato da G5
console.log('Data formatada para G5: ', dateHandler.currentDateG5Format());

// Retorna a hora atual no formato da G5
console.log('Hora formatada para G5: ', dateHandler.currentHourG5Format());

// Formatando uma data JS em formato da G5
const birthdayDate = new Date(1995, 1, 9);
console.log('Data formatada para G5: ', dateHandler.jsDateToG5StringFormat(birthdayDate));

// Formatando uma data da G5
const hourToTest = 1000; 
console.log('Hora formatada: ', dateHandler.g5HourToString(hourToTest));

// Data nula de G5
console.log('Data nula da G5: ', dateHandler.nullDateG5Format());

```


Output: 
```

Data formatada para G5:  30/09/2020
Hora formatada para G5:  657
Data formatada para G5:  09/02/1995
Hora formatada:  16:40
Data nula da G5:  31/12/1900

```