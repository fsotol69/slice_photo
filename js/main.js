let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

let img = new Image();
img.src = '/img/img.jpg';
let picturewidth = img.naturalWidth;
let nx = picturewidth / 5;
let pictureHeight = img.naturalHeight;
let ny = pictureHeight / 5;
// console.log( `width = ${img.naturalWidth} height = ${img.naturalHeight}` );

function drawSlicedPicture() {

  img.onload = function() {
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        let x = i * 5;
        let y = j * 5;
        ctx.drawImage(img, x, y, 5, 5, x + i * 1, y + j * 1, 5, 5);
      }
    }
  };

}

drawSlicedPicture();
