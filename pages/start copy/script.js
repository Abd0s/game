const startButton = document.querySelector('#start-button');

startButton.onclick = () => {
  const coordinates = '51.230599724905176, 4.418890664306525'
  const locationName = 'Parkspoornoord';
  const nextPage = 'stop1';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}

