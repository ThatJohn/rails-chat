import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

  consumer.subscriptions.create("RoomChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("Connected to Room channel");
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      console.log(data);
      console.log(data.content)
    }
  });

});