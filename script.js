function addPost(){

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === ""){
        alert("Please fill all fields");
        return;
    }

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <input type="text" placeholder="Add Comment" class="commentInput">
        <button onclick="addComment(this)">Comment</button>

        <ul></ul>
    `;

    document.getElementById("posts").appendChild(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function addComment(button){

    let post = button.parentElement;
    let input = post.querySelector(".commentInput");

    if(input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;

    post.querySelector("ul").appendChild(li);

    input.value = "";
}