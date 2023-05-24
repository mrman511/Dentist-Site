import loremDescription from "./loremDescription";



const mockServiceData = [
  {
    id: 1,
    title: 'Routine Cleaning',
    imagePath: 'routine-cleaning.jpeg',
  },{
    id: 2,
    title: 'Dental X-rays',
    imagePath: 'xray.jpg',
  },{
    id: 3,
    title: 'Low Level Laser Therapy',
    imagePath: 'low-level-laser-therapy.png',
  },{
    id: 4,
    title: 'Infant Teeth',
    imagePath: 'infantTeeth.jpg',
  },{
    id: 5,
    title: 'Invisalign',
    imagePath: 'invisalign.jpeg',
  },{
    id: 6,
    title: 'Dental Implants',
    imagePath: 'implant.jpeg',
  }
];

mockServiceData.forEach(item => item.description = loremDescription)

module.exports = {
  mockServiceData
}