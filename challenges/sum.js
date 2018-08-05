function sumAll(...args) {
   let sum = 0;
   sum = args.reduce((acc, el, index) => {
      console.log(index, acc, el);
      return acc + el}
   );
   console.log(sum);
}

sumAll(4, 5, 3, 8, 3);

var people = [
   {
      name: "John",
      salary: 1000
   },
   {
      name: "Mary",
      salary: 1100
   },
   {
      name: "Max",
      salary: 950
   }
]

let sumSalary = people.reduce((countSalary, person, index) =>
   {
      return {
         salary: countSalary.salary + person.salary
      }
   }
)

console.log(sumSalary.salary);

