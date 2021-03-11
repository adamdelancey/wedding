  $(document).ready(function(){
    $('select').formSelect();
  });

      function sendForm(contactForm) {
        var templateParams = {
        "from_name": contactForm.name.value,
        "transport": contactForm.transport.value,
        "starter": contactForm.starter.value,
        "main": contactForm.main.value, 
        "dessert": contactForm.dessert.value,  
        "special": contactForm.special.value,
        "song": contactForm.song.value,

    };
        
    emailjs.send('adamemelie', 'contactform', templateParams, "user_lcUgtLvivHdbuypgCUkjf")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
        alert("Received! Thanks very much :)");
        return false;  // To block from loading a new page
    }
    
