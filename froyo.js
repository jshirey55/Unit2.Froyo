let froyo = prompt(
    "Enter froyo flavors separated by a comma",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

let array = froyo.split(",")


console.log(array)
console.table(array)

const flavor = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
}

console.log(flavor)


console.log(Object.values(flavor))