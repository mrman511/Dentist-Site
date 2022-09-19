import loremDescription from "./loremDescription";

const genericService = {
  title: "Lorem Ipsum",
  imagePath: "mock-service.jpeg",
  description: loremDescription,
}

const mockServiceData = [];

for (let i = 0; i < 5; i++){
  mockServiceData.push(genericService);
}

for (let i = 0; i < mockServiceData.length; i++){
  console.log('I: ', i)
  mockServiceData[i].id = (i + 1);
  console.log( mockServiceData[i])
}

console.log('SERVICE DATA', mockServiceData)

module.exports = {
  mockServiceData
}