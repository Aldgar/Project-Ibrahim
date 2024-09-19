
//Getting the necessery elements for the eventListener:
const btnNext = document.getElementById ("btnnext");
const btnPrevious = document.getElementById("btnprev");

//Elements need manipulation:
//const tesCard = document.getElementsByClassName("testimoni");
//const tesbtn = document.getElementsByClassName("tesbtn");
//const tesText = document.getElementById("tesText");
//const tesName = document.getElementById("tesName");
//const tesPosition = document.getElementById("tesPosition");
//const mainPhoto = document.getElementsByClassName("j-img");

//Orgnizing the object Array:
    const testimonials = [
         {
        name: "June Cha",
        position: "Software Engineer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess."
    }, {
        name: "Iida Niskanen",
        position: "Data Engineer",
        photo: "https://randomuser.me/api/portraits/women/67.jpg",
        text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills."
    } , {
        name: "Renee Sims",
        position: "Cloud engineer",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder."
    }, {
        name: "Sasha Ho",
        position: "Phd student",
        photo:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills."
        }, {
            name: "Veeti Seppanen",
            position: "Frontend developer",
            photo: "https://randomuser.me/api/portraits/men/97.jpg",
            text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevateyour skills."
}]

let i = 0;
let j = testimonials.length;
const testimonialContainer = document.getElementById("testimonial-container");

//Creating function that display on the next & previous buttons:

  btnNext.addEventListener("click", () => {
        i = (j + i + 1) % j; 
        displayTestimonial();
  });
  
  btnPrevious.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });

  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${testimonials[i].text}</p>
    <img src=${testimonials[i].photo}>
    <h2>${testimonials[i].name}</h2>
    <h3>${testimonials[i].position}</h3>
    `;
  };

window.onload = displayTestimonial;

  /*
   Work Around for the logs:
    tesText.innerHTML = testimonials[0].text;
    mainPhoto.innerHTML = testimonials[0].photo;
    tesPosition.innerHTML = testimonials[0].position;
    tesName.innerHTML = testimonials[0].name;
*/

//***********************************//
//Year Function on the footer:
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//***********************************//

//Form Validation:

//Getting the necessery elements:
const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("inputFiled");
const errorName = document.getElementById("name-error");
const errorEmail = document.getElementById("email-error");
const errorMessage = document.getElementById("message-error");


//Event listener for the form submission and checking the email:
form.addEventListener("submit", (e)=> {

    let emailCheck = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (userName.value === "" || userName.value == null) {
        e.preventDefault();
        errorName.innerHTML = "Name is Required!";
    } else {
        errorName.innerHTML = "";
    }
    if (!email.value.match(emailCheck)) {
        e.preventDefault();
        errorEmail.innerHTML = "Valid Email is Required!";
    } else {
        errorEmail.innerHTML = "";
    }
    if (message.value === "" || message.value == null) {
        e.preventDefault();
        errorMessage.innerHTML = "Message is Required!";
    } else {
        errorMessage.innerHTML = "";
    }
    //Form Submission alert:

        if (userName.value === "" || email.value === "" || message.value === "") {
            e.preventDefault();
        } else {
            e.preventDefault();
            Swal.fire({
                position: "top-centre",
                title: "Thanks!",
                text: "Your Message has been sucessfully submitted!",
                icon: "success",
                confirmButtonBackgroundColor: "#23155B"
              }).then(function(){ 
                location.reload();
                }); 
            }
});

//Adding EventListeners to remove the error messages when focus on the input filed:
userName.addEventListener("focus", ()=> {
    errorName.innerHTML = "";
});
email.addEventListener("focus", ()=> {
    errorEmail.innerHTML = "";
});
message.addEventListener("focus", ()=> {
    errorMessage.innerHTML = "";
});




