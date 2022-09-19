import loremDescription from "./loremDescription";



const mockServiceData = [];

for (let i = 1; i < 6; i++){
  const genericService = {
    id: i,
    title: "Lorem Ipsum",
    imagePath: "mock-service.jpeg",
    description: loremDescription,
  }
  mockServiceData.push(genericService);
}

// for (let i = 0; i < mockServiceData.length; i++){
//   console.log('I: ', i)
//   mockServiceData[i].id = (i + 1);
//   console.log( mockServiceData[i])
// }

console.log('SERVICE DATA', mockServiceData)

module.exports = {
  mockServiceData
}