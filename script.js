const fetchRooms = async (url) => {
  const response = await fetch(url);
  
  const json = await response.json();

  return json;
}

fetchRooms("https://run.mocky.io/v3/349d9b08-b21b-4134-a500-883efcc6f8f6").then(data => {
  const rooms = data.salas;
  const roomList = document.getElementById("room-list");
  rooms.map(room => {
    const roomItem = document.createElement("li");
    roomItem.innerHTML = `
      <h3>${room.name}</h3>
    `;

    roomList.appendChild(roomItem);
  });
})
