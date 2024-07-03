function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelector(".slides");
//   let counter = 0;

//   setInterval(() => {
//     counter++;
//     slides.style.transform = `translateX(-${counter * 100 / 5}%)`; // Adjust for number of slides (5 in this case)
    
//     if (counter === 5) { // Adjust for number of slides (5 in this case)
//       counter = 0;
//       setTimeout(() => {
//         slides.style.transition = "none";
//         slides.style.transform = `translateX(0)`;
//         setTimeout(() => {
//           slides.style.transition = "transform 0.5s ease";
//         });
//       }, 500); // Adjust for transition duration
//     }
//   }, 3000); // Adjust for interval duration (3 seconds in this case)
// });