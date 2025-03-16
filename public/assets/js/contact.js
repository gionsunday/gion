window.addEventListener("load", () => {
  const form = document.querySelector(".php-email-form");
  const nameInput = document.querySelector("#name-field");
  const emailInput = document.querySelector("#email-field");
  const subjectInput = document.querySelector("#subject-field");
  const messageInput = document.querySelector("#message-field");
  const submitBtn = document.querySelector("#submit");
  const errorDiv = document.querySelector(".error-message");
  const successDiv = document.querySelector(".sent-message");

  const inputFields = [nameInput, emailInput, subjectInput, messageInput];

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    let borderRed = "1px solid red";

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const subjectValue = subjectInput.value;
    const messageValue = messageInput.value;

    if (
      nameValue == "" ||
      emailValue == "" ||
      subjectValue == "" ||
      messageValue == ""
    ) {
      nameInput.style.border = borderRed;
      emailInput.style.border = borderRed;
      subjectInput.style.border = borderRed;
      messageInput.style.border = borderRed;

      errorDiv.innerHTML = "Please fill the empty input fields.";
      errorDiv.style.display = "block";
    } else {
      submitBtn.textContent = "Sending...";
      errorDiv.style.display = "none";
      borderRed = "1px solid gray";
      nameInput.style.border = borderRed;
      emailInput.style.border = borderRed;
      subjectInput.style.border = borderRed;
      messageInput.style.border = borderRed;

      const formdData = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      };

      try {
        const response = await axios.post("/gion/api/contact", formdData);
        const result = await response;
        if (result.data.message == "Email Sent!") {
          
          nameInput.value = ""
          emailInput.value=""
          subjectInput.value=""
          messageInput.value =""

          successDiv.style.display = "block";
          submitBtn.textContent = "Message sent!";
          setTimeout(() => {
            successDiv.style.display = "none";
            submitBtn.textContent = "Send Message";
          }, 3000);
        } else {
          errorDiv.innerHTML = "Something went wrong. please try again.";
          errorDiv.style.display = "block";
        }
      } catch (error) {
        console.error(error);
      }
    }

    // inputFields.map((field, index)=>{
    //     if(field.value == ""){
    //     }

    //     else{
    //         field.style.border= "1px solid gray"
    //         const nameValue = nameInput.value
    //         const emailValue = emailInput.value
    //         const subjectValue = subjectInput.value
    //         const messageValue = messageInput.value

    //
    //     }
    // })
  });
});
