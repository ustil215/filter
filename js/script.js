const filterBox = document.querySelectorAll('.box');


document.querySelector('nav').addEventListener('click', event => {
   if (event.target.tagName !== 'LI') return false;

   let filtetClass = event.target.dataset['f'];

   filterBox.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filtetClass) && filtetClass !== 'all') {
         elem.classList.add('hide');
      }
   });
});