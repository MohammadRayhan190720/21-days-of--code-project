const handleContact = (event) =>{
  event.preventDefault();
  //  console.log(event);
  //  console.log(event.target.name);
  //  console.log(event.target.email);
  //  console.log(event.target.message);
  //  console.log(event.target.name.value);
  //  console.log(event.target.email.value);
  //  console.log(event.target.message.value);
  
   const name = event.target.name.value;
   const email = event.target.email.value;
   const message = event.target.message.value;
   console.log(name);
   console.log(email);
   console.log(message);

  //  const userInfo = {
    
  //   email: email.value,
  //   message: message.value,
  //   name: name.value,
    
  // }
  // console.log(userInfo);

  // name.value = "";
  // email.value = "";
  // message.value = "";



const successContainer = document.getElementById("success-container");
console.log(successContainer);

const namePera = document.createElement("p");
console.log(namePera);
namePera.innerText = `Your name :${name}`
const emailPera = document.createElement("p");
emailPera.innerText = `Your email: ${email}`;
const messagePera = document.createElement("p");
messagePera.innerText = `Your message: ${message}`;


console.log(namePera);
console.log(emailPera);
console.log(messagePera);

successContainer.appendChild(namePera);
successContainer.appendChild(emailPera);
successContainer.appendChild(messagePera);

  
}
// object array
const imageArray = [
  {
    url :"./project/image 3.png" ,
  },
  {
    url :"./project/image 5.png" ,
  },
  {
    url :"./project/image 6.png" ,
  },
  {
    url :"./project/image 7.png" ,
  },
]

// const fristImage =(imageArray[0])
// const secondImage =(imageArray[1])
// const thirdImage =(imageArray[2])

// console.log(imageArray);
// console.log(fristImage);
// console.log(secondImage);
// console.log(thirdImage);
// console.log(fristImage.url);

// for (let index = 0; index < imageArray.length; index++){
//   console.log(imageArray[index]);
// }

// for (const item of imageArray){
//   console.log(item);
// }

function handleShowProjects(){
const projectContainer = document.getElementById("projects");

// const projectDiv = document.createElement("div");

for (const item of imageArray) {

const projectDivImage = document.createElement("div");

projectDivImage.classList.add("project");
projectDivImage.innerHTML = `<img src = "${item.url}"alt="">`;
// console.log(projectDivImage);

projectContainer.appendChild(projectDivImage);
  
}
console.log("click",projectContainer);


}
// handleShowProjects();

