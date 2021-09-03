let btn = document.querySelectorAll('.shop__btn');
let table = document.querySelectorAll('.shop__tables');

btn.forEach((item)=> {
item.addEventListener('click', (e) =>{
    const id = item.getAttribute('data-tab');



    btn.forEach(function (item) {
        item.classList.remove('shop__btn-active');
      });
      table.forEach(function (item) {
        item.classList.remove('shop__tables-active');
      });


      item.classList.add('shop__btn-active');
      document.getElementById(id).classList.add('shop__tables-active');


});
});