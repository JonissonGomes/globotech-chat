const fetchData = async (url) => {
  const response = await fetch(url);
  
  const json = await response.json();

  return json;
}

fetchData("https://run.mocky.io/v3/349d9b08-b21b-4134-a500-883efcc6f8f6").then(data => {
  const rooms = data.salas;
  console.log(rooms)
  const roomTitle = document.querySelector(".nav__title");
  const participants = document.querySelector(".chat-participants__title");

  rooms.map(room => {
    roomTitle.innerText = `${room.name}`;
    participants.innerText = `Participantes (${room.users})`;
  });
})

fetchData("https://run.mocky.io/v3/55e3f9c9-df86-46c9-941a-ea43a7595e19").then(data => {
  const messages = data.messages;
  console.log(messages)
  const chatMessage = document.getElementById("chat-message");

  messages.map(message => {
    chatMessage.innerHTML += `
    <li class="chat-message__container">
      <p class="chat-message__user">${message.userName}</p>
      <div class="chat-message__content__container">
        <p class="chat-message__text">
          ${message.message}
        </p>
        <p class="chat-message__hour">
          ${message.date}
        </p>
      </div>
    </li>`;
  });
})
