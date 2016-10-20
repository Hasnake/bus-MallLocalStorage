'use strict';

var allImages = [];

var clicksOnImage = document.getElementById('wrapper');//Wrapper is the id for the div that contains the images.

var results = document.getElementById('update');

var refresh = document.getElementById('refreshPage');

var numberOfClicks = [];//15 is the total number of clicks to view the vote result.

var itemLabels = [];//this is for the chart.

var voteLabels = [];

var imgName = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair',
'cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass',];
var imgPath = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg',
'img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.jng','img/tauntaun.jpg','img/unicorn.jpg','img/usb.jpg','img/water-can.jpg','img/wine-glass.jpg',];

var Item = function(imgName, imgPath) { // Constructor : Needs to be capital letter
  //All objects in JavaScript are descended from Object;
  //all objects inherit methods and properties from 'Object.prototype'.
  this.imgName = imgName;
  this.imgPath = imgPath;
  this.votes = 0;
  this.displayed = 0;
  allImages.push(this);
};

function createNewImage() {
  for (var i = 0; i < imgPath.length; i++){
    new Item(imgName[i], imgPath[i]);
  }
};
createNewImage();

function randomIndex() {
  return Math.floor(Math.random() * allImages.length);
}

function displayImg() {
  var leftImgIndex = randomIndex();
  var centerImgIndex = randomIndex();
  var rightImgIndex = randomIndex();

  while (centerImgIndex === leftImgIndex) {
    centerImgIndex = randomIndex();
  }

  while (rightImgIndex === centerImgIndex || rightImgIndex === leftImgIndex) {
    rightImgIndex = randomIndex();
  }

  var leftImg = document.getElementById('left');
  leftImg.src = allImages[leftImgIndex].imgPath;
  leftImg.alt = allImages[leftImgIndex].imgName;

  var centerImg = document.getElementById('center');
  centerImg.src = allImages[centerImgIndex].imgPath;
  centerImg.alt = allImages[centerImgIndex].imgName;

  var rightImg = document.getElementById('right');
  rightImg.src = allImages[rightImgIndex].imgPath;
  rightImg.alt = allImages[rightImgIndex].imgName;
}

displayImg();

function displayImgClick(event) {
  var imgId = event.target.id;
  var imgAlt = event.target.alt;

  if (imgId === 'wrapper') {
    alert('you have to click on an image to vote!');
  } else if (numberOfClicks < 15) {
    for (var i = 0; i < allImages.length; i++) {
      if(imgAlt === allImages[i].imgName) {
        allImages[i].votes += 1;
        numberOfClicks++;
      }
      if (numberOfClicks === 15) {
        document.getElementById('update');
        update.style.visibility = 'visible';
      } else {
        document.getElementById('update');
        update.style.visibility = 'hidden';
        displayImg();
      }
    }
  }
}



function updateChart() {
  for (var i = 0; i < allImages.length; i++) {
    itemLabels.push(allImages[i].imgName);
    voteLabels.push(allImages[i].votes);
  }
}

function makeChart() {
  updateChart();
  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemLabels,
      datasets: [{
        label: 'BusMall Survey Results',
        data: voteLabels,
        backgroundColor:'#00BFD0',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Item Types'
          }
        }],
        yAxes: [{
          ticks: {
            max: 4,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
  var refresh = document.createElement('button');
  refresh.setAttribute('id', 'refreshPage');
  refresh.textContent = 'Refresh Page';
  document.getElementById('buttons').appendChild(refresh);
  refresh.addEventListener('click', refreshPage);
}

function refreshPage() {
  window.location.reload();
}

clicksOnImage.addEventListener('click', displayImgClick);
results.addEventListener('click', makeChart);
refresh.addEventListener('click', refreshPage);
