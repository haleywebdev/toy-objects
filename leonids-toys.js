const toys = []
const lego = { id: 1, name: "Lego Technic", brand: "The Lego Group", price: 50, ageRange: "13-18" }
const polly = { id: 2, name: "Polly Pocket", brand: "Mattel", price: 20, ageRange: "6-12" }
const playDoh = { id: 3, name: "Play-Doh", brand: "Hasbro", price: 15, ageRange: "2-12" }

toys.push(lego)
toys.push(polly)
toys.push(playDoh)

/* for (const toy of toys) {
    console.log(`The price of ${toy.name} is $${toy.price}`)
} */

const buzz = {
    id: 4,
    name: "Buzz Lightyear Figurine",
    brand: "Disney",
    price: 10,
    ageRange: "all"
}

const pillowPet = {
    id: 5,
    name: "Pillow Pet Snuggly Puppy",
    brand: "Pillow Pet Inc",
    price: 30,
    ageRange: "all"
}


toys.push(buzz)
toys.push(pillowPet)
toys.push(pillowPet)

console.log(toys)

// // console.log(toys)

// // for (const toy of toys) {
// //     console.log(`The ${toy.name} toy is made by ${toy.brand}. The average cost is $${toy.price}. The toy is ${toy.genderNeutrality} and ${toy.shareability} with friends. The most suitable age range is ${toy.ageRange}.`)
// // }

// // const toyToFind = 4

// // for (const toy of toys) {
// //     toy.price = toy.price * 0.05 + toy.price

// //     if (toy.id === toyToFind) {

// //     console.log(`The price of ${toy.name} has increased to $${toy.price}.`)
// //     }
// // }

// const addToyToInventory = (toyObject) => {
//     const lastIndex = toys.length - 1
//     const currentLastToy = toys[lastIndex]
//     const maxId = currentLastToy.id
//     const idForNewToy = maxId + 1
//     toyObject.id = idForNewToy

//     toys.push(toyObject)

// }

// const rubiksCube = {
//     name: "Rubik's Cube",
//     brand: "Spin Master",
//     genderNeutrality: "gender neutral",
//     price: 5,
//     shareability: "shareable",
//     ageRange: "all"
// }

// addToyToInventory(rubiksCube)

// for (const toy of toys) {
//     console.log(`The ${toy.name} toy is made by ${toy.brand}. The average cost is $${toy.price}. The toy is ${toy.genderNeutrality} and ${toy.shareability} with friends. The most suitable age range is ${toy.ageRange}.`)
//  }

// //  console.log(toys)