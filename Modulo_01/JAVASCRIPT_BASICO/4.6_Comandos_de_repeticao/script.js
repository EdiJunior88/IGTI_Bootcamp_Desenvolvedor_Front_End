console.log('imprimindo de 1 a 5 com while');

var contador1 = 1;
while(contador1 <= 5){
  console.log(contador1);
  contador1++;
}

console.log('imprimindo de 1 a 5 com do while');

var contador2 = 1;
do{
  console.log(contador2);
  contador2++;
}
while(contador2 <= 5)

console.log('imprimindo de 1 a 5 com for');

var contador3 = 1;
for(; contador3 <= 5; contador3++){
  if(contador3 === 3){
    continue; //pula o número 3
  }
  console.log(contador3);
}

/*
utilizando o break junto com o IF

var contador3 = 1;
for(; contador3 <= 5; contador3++){
  console.log(contador3);
  if(contador3 === 3){
    break; 
  }
}
*/

/*
Pode declarar a primeira variável antes do for

var contador3 = 1; //pode declarar a primeira variável antes do for
for(; contador3 <= 5; contador3++){
  console.log(contador3);
}
*/

/*
Modelo tradicional do for

for( var contador3 = 1; contador3 <=5; contador3++){
  console.log(contador3);
}
*/