let posts = [
  {
    'userimg': 'img/profile1.jpg',
    'author': 'mick_93',
    'image': 'img/post1.jpg',
    'description': 'Die neue Ausgabe der New York Times ist da!!!',
    'comments': []
  },
  {
    'userimg': 'img/profile2.jpg',
    'author': 'Lena_-',
    'image': 'img/post2.jpg',
    'description': 'Mit Mia in Thailand.',
    'comments': []
  },
  {
    'userimg': 'img/profile3.jpg',
    'author': 'dani1780',
    'image': 'img/post3.jpg',
    'description': 'Mein neuer Audi ist endlich da!!!',
    'comments': []
  },
  {
    'userimg': 'img/profile4.jpg',
    'author': 'chris_-j',
    'image': 'img/post4.jpg',
    'description': 'Müsli am Morgen vertreibt Kummer und Sorgen.',
    'comments': []
  },
  {
    'userimg': 'img/profile5.jpg',
    'author': '-_Andy_-',
    'image': 'img/post5.jpg',
    'description': 'Bald gibts Bescherung. ;)',
    'comments': []
  },
];
load();

function render() {
  document.getElementById('usersection').innerHTML += '';
  for (let k = 0; k < posts.length; k++) {
    const user = posts[k];

    document.getElementById('usersection').innerHTML += userContainerTemplate(user);
    showComments();
  }
}

function userContainerTemplate(user) {
  return `
    <div class="user-container-nav">
      <img src="${user['userimg']}">
      <div><b>${user['author']}</b></div>
    </div>
  `;
}

function showComments() {
  document.getElementById('postcontainer').innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    document.getElementById('postcontainer').innerHTML += postTamplete(post, i);

    loadComments(post, i)
  }
}

function postTamplete(post, i) {
  return `
  <div class="post">
    <div class="post-image">
      <img src="${post['image']}">
    </div>
    <div class="user-container">
      <img src="${post['userimg']}">
      <div><b>${post['author']}</b>
      </div>
    </div>
    <div class="message-container">
      <div>${post['description']}</div>
    </div>
    <div class="comment-container" id="comment-container${i}"></div>
      <div class="input-container">
      <input placeholder=" Kommentar hinzufügen..." id="mycomment${i}">
      <button onclick="addPost(${i})">Posten</button>
    </div>
  </div>
  `;
}

function addPost(i) {
  let comment = document.getElementById(`mycomment${i}`).value;
  posts[i]['comments'].push(comment);
  showComments();
  save();
}

function loadComments(post, i) {
  for (let j = 0; j < post['comments'].length; j++) {
    const comment = post['comments'][j];
    document.getElementById(`comment-container${i}`).innerHTML += `<div>${comment}</div>`;

  }
}

function save() {
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem(posts, postsAsText);
}

function load() {
  let postsAsText = localStorage.getItem(posts);
  if (postsAsText) {
    posts = JSON.parse(postsAsText);
  }
}