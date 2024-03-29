// this will have the form js
const formElement = document.querySelector('form');
const userNameInput = document.getElementById('User');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('content');
const submitInput = document.querySelector('.submit');

let blogPost= [];

function submitBlog() {
    const obj = {
        userName: userNameInput.value,
        title: titleInput.value,
        content: textInput.value
    };
    blogPost.push(obj);
    console.log(blogPost);
    localStorage.setItem('blogPost', JSON.stringify(blogPost))
}


submitInput.addEventListener('click', submitBlog);