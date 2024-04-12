//! FUNCIÓN SIDE SECTION
const toggleSideSection = () => {
  const sideSection = document.querySelector('#section');
  if (sideSection.style.display === 'none') {
    sideSection.style.display = 'block';
  } else {
    sideSection.style.display = 'none';
  }
}

//? Add an event listener to the hamburger menu
const hamburgerMenu = document.querySelector('.burger');
hamburgerMenu.addEventListener('click', toggleSideSection);