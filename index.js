
const numbers =[5,10,15,20];
console.log("The sum is:", sumArray(numbers));

function sumArray(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}




const names = ['Ali', 'Sara', 'Omar', 'Lina', 'Mohammed'];
function longNames(names) {
  return names.filter(name => name.length > 4);
}

console.log(longNames(names)); 


