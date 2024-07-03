function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function autoSlide(){
  setInterval(() => {
    slide(getItemActiveIndex() + 1)
  }, 1000); //slide speed = 1s
}

function slide(toIndex){
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemsActive = document.querySelector(".carousel_item_active");

  // check if toIndex exceeds the number of carousel items
  if(toIndex > itemsArray.length){
    toIndex = 0;
  }

  const newItemActive = itemsArray[toIndex];

  // start transition
  newItemActive.classList.add("");
}

function getItemActiveIndex(){
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemsActive = document.querySelector(".carousel_item_active");
  const itemActiveIndex = itemsArray.indexOf(itemsActive);
  return itemActiveIndex;
}