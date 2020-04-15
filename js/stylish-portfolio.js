(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


//Custom modifications for text animation
var words = (function(){
  var words = [
      'Performance',
      'Growth',
      'Brand',
      'Content',
      'Social-media',
      'Traditional',
      'Data-driven',
      'Creative'
      ],
    el = document.querySelector('.verb'),
    currentIndex,
    currentWord,
    prevWord,
    duration = 1700;

  var _getIndex = function(max, min){
    currentIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    //Generates a random number between beginning and end of words array
    return currentIndex;
  };

  var _getWord = function(index){
    currentWord = words[index];

    return currentWord;
  };

  var _clear = function() {

    setTimeout(function(){
      el.className = 'verb';
    }, duration/4);
  };

  var _toggleWord = function(duration){
    setInterval(function(){
      //Stores value of previous word
      prevWord = currentWord;

      //Generate new current word
      currentWord = words[_getIndex(words.length-1, 0)];

      //Generate new word if prev matches current
      if(prevWord === currentWord){

        currentWord = words[_getIndex(words.length-1, 0)];
      }

      //Swap new value
      el.innerHTML = currentWord;

      //Clear class styles
      _clear();

      //Fade in word
      el.classList.add(
        'js-block',
        'js-fade-in-verb'
        );

    }, duration);
  };

  var _init = function(){
    _toggleWord(duration);
  };

  //Public API
  return {
    init : function(){
      _init();
    }
  };
})();

words.init();


// Fun with Cookies
// Parse the URL

const queryStr = window.location.search.split("?")
    const queryParams = {}
    if (queryStr && queryStr.length > 1) {
      let queryParamsArr = queryStr[1].split("&");
      if (queryParamsArr && queryParamsArr.length > 0) {
        queryParamsArr.forEach((p) => {
          queryParams[p.split("=")[0]] = decodeURIComponent(p.split("=")[1]);
        });
      }
    }

var source = queryParams['utm_source'];
var medium = queryParams['utm_medium'];
var campaign = queryParams['utm_campaign'];
var term = queryParams['utm_term'];
var content = queryParams['utm_content'];

Cookies.set('source_first', source, {expires:365,domain:'peterandrewclark.github.io'});
Cookies.set('medium_first', medium, {expires:365,domain:'peterandrewclark.github.io'});
Cookies.set('campaign_first', campaign, {expires:365,domain:'peterandrewclark.github.io'});
Cookies.set('term_first', term, {expires:365,domain:'peterandrewclark.github.io'});
Cookies.set('content_first', content, {expires:365,domain:'peterandrewclark.github.io'});


//Fun with Location Data
$(function() {
  $.ajax({
    url: "https://geolocation-db.com/json/",
    dataType: "json",
    success: function( location ) {
      var GeoCode = location.country_name;
      var IpCode = location.IPv4;
      var StateCode = location.state;  
	  var CityCode = location.city;
	  var PostalCode = location.postal; 	  
      $('#country').append(GeoCode);
      $('#00Nf400000UloIr').append(IpCode);
      $('#state').append(StateCode);
	  $('#city').append(CityCode);
	  $('#postal').append(PostalCode);
      
	  
	  var firsturl = "https://maps.google.com/maps?q=";
	  var lasturl = "\&output\=embed";
	  
	  var ifrm = document.createElement('iframe');
	  ifrm.setAttribute('id','ifrm'); //This is hte iframe ID
	  
	  var el = document.getElementById('mapclass');
	  el.parentNode.appendChild(ifrm, el);
	  
	  ifrm.setAttribute('src', firsturl + PostalCode + lasturl)
	  //; 'frameborder', "0";'width', "100%";'height',"100%";'scrolling',"no";'marginheight',"0";'marginwidth',"0");
	  
	 
    }
  }); 
}); 


//Javascript that inserts the URL for the google map based on the GEO zip code returned

function enterZip() {
	var firsturl = "https://maps.google.com/maps?q="
	var lasturl = ";output=embed"
	
	string.concat(firsturl,PostalCode,lasturl);
}


//Fun with Particles
particlesJS("particles-js",{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#cdcdcd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#cdcdcd",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


