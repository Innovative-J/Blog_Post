// this will have the form js
const formElement = document.querySelector('form');
const userNameInput = document.getElementById('User');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('content');
const submitInput = document.querySelector('.submit');



function submitBlog() {
    const obj = {
        userName: userNameInput.value,
        title: titleInput.value,
        content: textInput.value
    };
    console.log(obj);
}


submitInput.addEventListener('click', submitBlog);