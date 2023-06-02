const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
     else{
       entry.target.classList.remove('show');
    }
  });
});

const hiddenelements = document.querySelectorAll('.transitions')
hiddenelements.forEach((el) => observer.observe(el));





function onclickmenu() {
  
    let x = document.getElementById("menu");
    let listing = document.getElementById("optionset") 
    if (x.style.display === "none") {
      x.style.display = "block";
      listing.style.transition = "opacity 1s"
      listing.style.opacity = "1";
      x.style.overflow = "hidden";
    } else {
      x.style.display = "none";
    }
}

