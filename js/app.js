//Setup for CountTo library
//I set it to work but I didn't use it
// jQuery(function ($) {
//   $('.timer').countTo({
//     speed: 1000,
//     refreshInterval: 10,
//   });
// });

// Counter method developed by me

let nCount = selector => {
    $(selector).each(function () {
        $(this)
            .animate({
                Counter: $(this).text()
            }, {
                // A string or number determining how long the animation will run.
                duration: 3000,
                // A string indicating which easing function to use for the transition.
                easing: "swing",
                /**
                 * A function to be called for each animated property of each animated element. 
                 * This function provides an opportunity to
                 *  modify the Tween object to change the value of the property before it is set.
                 */
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
    });
};

let a = 0;
$(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
});


// cookie to store phone number

function saveCookies() {
    // store the input value into the variable cookie converted the value input to a string
    let cookies = document.getElementById("contactLabel").value.toString();
    // setup the expiration date 
    var expiresAttrib = new Date(Date.now() + 60 * 1000).toString();
    // variable cookieString stores the cookie value
    cookieString = cookies + ";" + expiresAttrib + ";";
    //document.cookie creates the cookie 
    document.cookie = cookieString;
    //Uncomment the line  bellow to see the cookie value
    //   document.getElementById("out").innerHTML = document.cookie;
}

//form validation test drive 

var options = $('#checkName option').clone();

$('#model').change(function(){
  var val = $(this).val(),
      filterOptions = val == '' ? options : options.filter('[value="' + val + '"]');
  $('#checkName').html('').append(filterOptions);
});
