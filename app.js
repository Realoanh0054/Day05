var btnsearch = document.querySelector('.search-box__btn')

btnsearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling);
    this.previousElementSibling.focus();
})