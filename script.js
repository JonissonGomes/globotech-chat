const fetchRooms = () => {
  return fetch("https://run.mocky.io/v3/349d9b08-b21b-4134-a500-883efcc6f8f6")
    .then(response => response.json())
    .then(rooms => {
      return rooms;
    }).catch(err => {
      console.error('Not Found', err);
    }); ;
}

const getRooms = async () => {
  const rooms = await fetchRooms();

  return rooms;
}

getRooms();