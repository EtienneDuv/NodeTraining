//NEW MESSAGE EVENT
const form = document.querySelector("#chatForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const   messageInput = document.querySelector("#message"),
            html = `<div class='input-group mb-3 offset-sm-1 col-sm-11'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>${messages.id}</span>
                        </div>
                        <div>
                            <span class="form-control">${messageInput.value}</span>
                        </div>
                    </div >`;
    console.log("message :", messageInput.value);
    socket.emit("chat_message", messageInput.value);
    messageInput.value = '';
    const messagesDiv = document.getElementById("messages");
    messagesDiv.insertAdjacentHTML("beforeend", html);
    return false;
});
