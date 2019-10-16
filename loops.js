function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push(`I am ${i+1} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}
