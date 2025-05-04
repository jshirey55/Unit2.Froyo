//Prompt
let froyo = prompt(
    "Enter froyo flavors separated by a comma",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

//Array
let array = froyo.split(",")

//Object
const flavor = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
}

//Results
const results = {};

array.forEach((Item)=> {
    if(results[Item]) {
        results[Item] += 1;
    } else {
        results[Item] = 1;
    }
});


console.log(results)
console.table(results)
