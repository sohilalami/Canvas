let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// oor 1
context.beginPath();
context.arc(60, 80, 50, 0, 2 * Math.PI);
context.fillStyle = "rgb(124, 76, 31)";
context.fill();
context.closePath();
context.stroke();
// oor 2
context.beginPath();
context.arc(340, 80, 50, 0, 2 * Math.PI);
context.fillStyle = "rgb(124, 76, 31)";
context.fill();
context.closePath();
context.stroke();
// binnen oor 1
context.beginPath();
context.arc(60, 80, 35, 0, 2 * Math.PI);
context.fillStyle = "rgb(193, 143, 96)";
context.fill();
context.closePath();
context.stroke();
// binnen oor 2
context.beginPath();
context.arc(340, 80, 35, 0, 2 * Math.PI);
context.fillStyle = "rgb(193, 143, 96)";
context.fill();
context.closePath();
context.stroke();
// hoofd
context.beginPath();
context.arc(200, 200, 150, 0, 2 * Math.PI);
context.fillStyle = "rgb(124, 76, 31)";
context.fill();
context.closePath();
context.stroke();
// neus
context.beginPath();
context.arc(200, 180, 15, 0, 2 * Math.PI);
context.fillStyle = "rgb(252, 199, 243)";
context.fill();
context.closePath();
context.stroke();
// mond
context.beginPath();
context.arc(200, 230, 50, 0, 1 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();
// tand 1
context.beginPath();
context.rect(205, 230, 30, 40);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
// tand 2
context.beginPath();
context.rect(170, 230, 30, 40);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
// oog 1
context.beginPath();
context.arc(130, 130, 40, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
// oog 2
context.beginPath();
context.arc(290, 130, 40, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
// pupil 1
context.beginPath();
context.arc(290, 130, 25, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();
// pupil 2
context.beginPath();
context.arc(130, 130, 25, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();