// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

function downloadFile() {
  console.log("hello");
  const link = document.createElement('a');
  link.href = 'assets/pdf/NikhilUpadhyayResume.pdf'; // Replace with your file path
  link.download = 'Nikhil Upadhyay Resume.pdf'; // Set the desired download filename
  link.click();
}

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

(function(){
  emailjs.init({
    publicKey: "4hsTkEdG1Wh2sYu1t",
  });
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Hello Email");

    const form = event.target;
    var param = {
      from_name: document.getElementById('name').value,
      email_id: document.getElementById('email_id').value,
      message: document.getElementById('message').value,
    }

    emailjs.send('service_xm51t1h', 'template_1xpu65b', param)
        .then((response) => {
            document.getElementById('responseMessage').innerHTML = 'Thank you for contacting us!';
            document.getElementById('responseMessage').style.color = 'green';
            document.getElementById('responseMessage').style.display = 'block';
            form.reset();  // Clear the form
        })
        .catch((err) => console.log(err));
});
