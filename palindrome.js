function checkPalindrome(str){
  let rules = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(rules,'');
  return str == str.split('').reverse().join('');
}

console.log(checkPalindrome("A man, A plan, A canal. Panama"));
