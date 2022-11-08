var splide1 = new Splide('#slider1', {
  width: 200,
  height: 200,
  arrows: false,
  pagination: false,
  drag: true,
  cover: true,
});

var splide2 = new Splide('#slider2', {
  width: 200,
  height: 200,
  arrows: false,
  pagination: false,
  drag: true,
  cover: true,
});

var splide3 = new Splide('#slider3', {
  width: 200,
  height: 200,
  arrows: false,
  pagination: false,
  drag: true,
  cover: true,
});

var thumbnails = document.getElementsByClassName('thumbnail');
var current;

var thumbnails3 = document.getElementsByClassName('thumbnail3');
var current3;

var thumbnails2 = document.getElementsByClassName('thumbnail2');
var current2;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    splide1.go(index);
  });
}

splide1.on('mounted move', function () {
  var thumbnail = thumbnails[splide1.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current = thumbnail;
  }
});

for (var i = 0; i < thumbnails2.length; i++) {
  initThumbnail2(thumbnails2[i], i);
}

function initThumbnail2(thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    splide2.go(index);
  });
}

splide2.on('mounted move', function () {
  var thumbnail = thumbnails2[splide2.index];

  if (thumbnail) {
    if (current2) {
      current2.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current2 = thumbnail;
  }
});

for (var i = 0; i < thumbnails3.length; i++) {
  initThumbnail3(thumbnails3[i], i);
}

function initThumbnail3(thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    splide3.go(index);
  });
}

splide3.on('mounted move', function () {
  var thumbnail = thumbnails3[splide3.index];

  if (thumbnail) {
    if (current3) {
      current3.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current3 = thumbnail;
  }
});

splide1.mount();
splide2.mount();
splide3.mount();
