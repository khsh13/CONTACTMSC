const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function sendMail(){
  var params = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value, 
  };

  const serviceId=  "service_w2nuba6";
  const templateId= "template_5z88guk";

  emailjs.send(servideId, templateId, params)
  .then(
    res=>{
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value= "";
      console.log(res);
      alert("your message sent successfully");
    }
  )
  .catch((err) => console.log(err));
}
