'use strict';

// upon page load, ask the server for all the tags it has saved, 
// and put them on the screen

(function () {

  var $wall = document.querySelector('.wall');

  axios.get('http://localhost:1337/tag').then(function (response) {
    tagWall(response);
  }).catch(function (error) {
    console.log(error);
  });

  var randomTagPlace = function randomTagPlace(p) {
    p.style.position = "absolute";
    p.style.top = Math.floor(Math.random() * document.body.clientHeight) + 'px';
    p.style.left = Math.floor(Math.random() * document.body.clientWidth) + 'px';
  };

  function tagWall(tags) {
    tags.data.forEach(function (data) {
      console.log(data);
      var pEl = document.createElement('p');
      pEl.innerHTML = tags.data;
      pEl.classList.add('tag');
      $wall.appendChild(pEl);
      randomTagPlace(pEl);
      console.log(pEl);
    });
  }
})();
//# sourceMappingURL=wall.js.map
