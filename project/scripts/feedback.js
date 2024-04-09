  const feedbackElement = document.getElementById('feedback');

  const formElement = document.forms[0];

  formElement.addEventListener('submit', function (e) {

      e.preventDefault(); 

      feedbackElement.innerHTML = 'Hello ' + formElement.name.value + '! Thank you for your message. We will get back with you as soon as possible!';

      feedbackElement.style.display = "block"; 

      document.body.classList.toggle('moveDown'); 
      setTimeout(function(){
        feedbackElement.style.display = "none";
        formElement.reset();
      },5000)
      
  });

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
