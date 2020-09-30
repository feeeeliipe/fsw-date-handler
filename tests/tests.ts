import FSWDateHandler from '../src/index';

const dateHandler = new FSWDateHandler();

console.log('******************');
console.log('    DATA ATUAL    ');
console.log('******************');
console.log('JavaScript: ', new Date());
// Retorna a data atual no formato da G5
console.log('Data formatada para G5: ', dateHandler.currentDateG5Format());
// Retorna a hora atual no formato da G5
console.log('Hora formatada para G5: ', dateHandler.currentHourG5Format());


console.log('******************');
console.log('FORMATANDO DATA JS');
console.log('******************');
const birthdayDate = new Date(1995, 1, 9);
// Formatando data JS em formato da G5
console.log('JavaScript: ', birthdayDate);
console.log('Data formatada para G5: ', dateHandler.jsDateToG5StringFormat(birthdayDate));


// Formatando hora da G5 em string
console.log('******************');
console.log('FORMATANDO HORA G5');
console.log('******************');
const hourToTest = 1000; 
console.log('Hora no formato G5: ', hourToTest);
console.log('Hora formatada: ', dateHandler.g5HourToString(hourToTest));

console.log('******************');
console.log(' DATA NULA DA G5  ');
console.log('******************');
// Retornando a data nula da G5
console.log(dateHandler.nullDateG5Format());