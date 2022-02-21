const containerEl = document.querySelector(".chat-messages__container");


fetch("https://run.mocky.io/v3/55e3f9c9-df86-46c9-941a-ea43a7595e19")
  .then((response) => response.json())
  .then((data) => {const result = data.messages
  
    result.forEach((item) => {
      containerEl.insertAdjacentHTML("afterbegin", `
      <div class="chat-message__container radius__4">
      <p class="chat-message__user">${item.userName}</p>
      <div class="chat-message__content__container">
        <p class="chat-message__text">${item.message}</p>
        <p class="chat-message__hour">12:52</p>
      </div>
    </div>`)
    })
  })