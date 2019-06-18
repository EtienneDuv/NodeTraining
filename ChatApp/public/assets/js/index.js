//NEW MESSAGE EVENT
const form = document.querySelector("#chatForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let messageInput = document.querySelector("#message");
    console.log("message :", messageInput.value);
    socket.emit("chat_message", messageInput.value);
    messageInput.value = '';
    return false;
});