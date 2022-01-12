const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type:"wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
}
// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringRepresentation = `The ${woodBlock.length}-inch, ${woodBlock.material} ${woodBlock.type} was carved into a wooden ${woodBlock.purpose}`
    return stringRepresentation

}



// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)