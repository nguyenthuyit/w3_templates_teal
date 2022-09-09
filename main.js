// sidebar
var sideBar = document.getElementById('side-bar')
var closeItems = document.querySelectorAll('#side-bar li a[href *= "#"]')

function openSidebar(){
    sideBar.style.display ='block'
}
for( var i=0; i<closeItems.length; i++){
    var closeItem = closeItems[i]
    closeItem.onclick = function(){
        sideBar.style.display = 'none'
    }
}

// sileshow
var slideIndex = 1
function plusSlide(n){
    slideIndex = slideIndex +n
    showSlide(slideIndex)

}
function showSlide(n){
    var show = document.getElementsByClassName('img-item')
    if(n>show.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex += show.length
    }
    for ( var i =0;i<show.length; i++){
        show[i].style.display = 'none'
    }
    show[slideIndex-1].style.display = 'block'
   

    
}
showSlide(1);

// Accordions
function openBtn(id){
    var btn = document.getElementById(id)
    if(btn.className.indexOf(' open') == -1){
        btn.className += ' open'
    }else{
        btn.className =btn.className.replace(' open','')
    }
}

// Tab
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("city")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tabcontent.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" back-color", "")
    }
    document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " back-color"
  }
//   modal
var btn =document.getElementById('btn-header')
var modal = document.getElementById('mod')
btn.onclick = function(){
    modal.classList.add('open')
}
function closeModal(){
    modal.classList.remove('open')
}





