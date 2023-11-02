const email = document.getElementById('Email');
const form = document.getElementById('form');
const error = document.querySelector('.error');

form.addEventListener('submit',(e) =>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxcXUDCB6vsGIklDDFxqLtW-Vyiv8GN8bpRayU-JMYdy4_fkfX5s9Rk-x4UAjk39vk/exec ",
      data:$("#form").serialize(),
      method:"post",
      success:function (response){
        error.innerHTML = 'Form sumbitted Succesfully'
         error.classList.add('success');
        setTimeout(() => {
            window.location.reload()
          }, 1500);
          
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")
       }
  })
})

  email.addEventListener('input', function () {
      let mail=email.value;
      if (isEmailValid(mail)) {
        error.classList.remove('visibleError');
        
    } else {
       error.classList.add("visibleError");
    }
});
//function check wheather the email is valid
function isEmailValid(mail) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
}