// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.getElementById("projectsContainer");

// const startDragging = (e) => {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };

// const stopDragging = () => {
//   mouseDown = false;
// };

// const move = (e) => {
//   e.preventDefault();
//   if (!mouseDown) {
//     return;
//   }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   console.log("x:", x);
//   console.log("startX:", startX);
//   console.log("scroll:", scroll);

//   slider.scrollLeft = scrollLeft - scroll;
//   console.log("slider.scrollLeft:", slider.scrollLeft);
// };

// // Add the event listeners to the document
// slider.addEventListener("mousemove", move, false);
// slider.addEventListener("mousedown", startDragging, false);
// slider.addEventListener("mouseup", stopDragging, false);
// slider.addEventListener("mouseleave", stopDragging, false);
