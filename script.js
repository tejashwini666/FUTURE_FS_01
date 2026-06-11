document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Submitted Successfully!");

    this.reset();

});
