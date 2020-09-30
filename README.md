# FSW-DATE-HANDLER

Biblioteca para tratamento de data/hora com formato utilizado pelos sistemas Senior G5 em projetos JS. 

# Instalação

`npm i fsw-date-handler --save`

# Como utilizar

## Buscando data e hora atual no formato da G5
```

import FSWDateHandler from 'fsw-date-handler';

const dateHandler = new FSWDateHandler();

// Retorna a data atual no formato da G5
console.log('Data formatada para G5: ', dateHandler.currentDateG5Format());

// Retorna a hora atual no formato da G5
console.log('Hora formatada para G5: ', dateHandler.currentHourG5Format());

```

