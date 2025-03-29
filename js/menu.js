const el = document.querySelector('.mobile-icon');

el.addEventListener('click', () => {
   const navLinks =  document.querySelector('.nav-links');

   if(navLinks.classList.contains('show')) {
        navLinks.classList.add('hide');
        navLinks.classList.remove('show');
   } else {
        navLinks.classList.add('show');
        navLinks.classList.remove('hide');
    }
  
});
    
