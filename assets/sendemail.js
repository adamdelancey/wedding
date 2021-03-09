
    function sendMail(contactForm) {
        var templateParams = {
        "from_name": contactForm.name.value,        
        "from_email": contactForm.emailaddress.value,
        "from_address": contactForm.address.value,        
    };
        
    emailjs.send('adamemeliewedding', 'wedding_template', templateParams, "user_scvEXqvGskRGGpE58Sfoi")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
        return false;  // To block from loading a new page
    }
    
