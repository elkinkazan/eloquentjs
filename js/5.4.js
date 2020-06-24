function direction(text){
  scriptArr = [];
  for (let t of text) {
    let script = characterScript(t.charCodeAt(0));
    if (script!=null) {
      scriptArr.push(script);
    }
  };
 let counts = countBy( scriptArr, script => script.direction);
 let max = 0;
 let name = "none";
 for (let i = 0; i < counts.length; i++){
   if (counts[i].count > max) {
     name = counts[i].name;
   }
 };
 return name;
}
// 
// Решение на сайте
// function dominantDirection(text) {
//   let counted = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({name}) => name != "none");
//
//   if (counted.length == 0) return "ltr";
//
//   return counted.reduce((a, b) => a.count > b.count ? a : b).name;
// }
