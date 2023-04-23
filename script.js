function sumDigits(number) {
    let res = 0;
    for(let item of String(number)){
      if(item == '-') continue;
         res += Number(item);
    }
  return res;
}
