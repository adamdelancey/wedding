$(document).ready(function(){
    function sendMail(contactForm) {
        emailjs.send("adamemeliewedding","wedding_template", {
            "to_name": "Adam & Emelie",
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "from_address": contactForm.address.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
        return false;  // To block from loading a new page
    }
});