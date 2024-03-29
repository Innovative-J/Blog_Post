function goBack() {
    window.history.back();
}


const user = localStorage.getItem('User');
const title =localStorage.getItem('Title');
const content =localStorage.getItem('Content');

  document.getElementById('title').innerText = title;
    document.getElementById('content').innerText = content;
    document.getElementById('user').innerText = `Posted by: ${user}`;
