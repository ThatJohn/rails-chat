import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to Room channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    addMessage(data.content);
  },

});

function addMessage(message) {
  const messageList = document.getElementById("message-list");
  const containerDiv = document.getElementById("chat-container");
  let newComment = document.createElement("li");
  const messageInput = document.getElementsByClassName("message-input")[0];
  newComment.innerText = message.content;
  messageList.appendChild(newComment);
  messageInput.value = '';
  containerDiv.scrollTop = containerDiv.scrollHeight;
}