const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ownerProfile = {
  name: "Lorem Ipsum",
  imagePath: "owner.jpeg",
  position: "Dentist",
  description: loremDescription,
}

const genericProfile = {
  name: "Lorem Ipsum",
  imagePath: "mock-profile.jpeg",
  position: "Hygenist",
  description: loremDescription,
}

const mockTeamData = [ownerProfile];

for (let i = 0; i < 5; i++){
  mockTeamData.push(genericProfile);
}

for (let i = 0; i < mockTeamData.length; i++){
  mockTeamData[i].id = (i + 1);
}


module.exports = {
  mockTeamData
}