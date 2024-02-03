const postContainer = document.querySelector('.feed');
const postInput = document.querySelector('.compose input');
const postButton = document.querySelector('.compose button');
const likeBtns = document.querySelectorAll('.actions a');
const commentBtns = document.querySelectorAll('.actions a ');
const deleteBtns = document.querySelectorAll('.post.user img ');

let counter = 0;

postInput.addEventListener('input', () => {
    const value = postInput.value;
    const length = value.length;
    counter = length;
    document.querySelector('.counter').textContent = $; {
        length / 100
    };
    if (length > 100) { postInput.value = value.substring(0, 100); }
});

postButton.addEventListener('click', () => {
    if (counter <= 100 && counter > 0) {
        const post = document.createElement('div');
        post.classList.add('post');
        postContainer.appendChild(post);
        postInput.value = '';
        counter = 0;
        document.querySelector('.counter').textContent = $; { counter / 100 }
    }
});

likeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('active');
    });
});

commentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const post = btn.parentNode.parentNode.parentNode;
        const comment = document.createElement('div');
        comment.classList.add('comment');;
    });
});

deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const post = btn.parentNode.parentNode.parentNode;
        post.parentNode.removeChild(post);
    });
});