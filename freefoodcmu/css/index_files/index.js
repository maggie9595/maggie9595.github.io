<<<<<<< HEAD:css/index_files/index.js
window.fbAsyncInit = function() {
    FB.init({
      appId      : '498020883669593',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });



  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
=======
  <html>
    <head>
      <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="css/style.css"/>
      <link href='http://fonts.googleapis.com/css?family=Enriqueta:400,700' rel='stylesheet' type='text/css'>
      
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/bin/materialize.min.js"></script>    
      <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.3.4.min.js"></script>  
      <script type="text/javascript" src="js/login.js"></script>
    </head>

    <body>
	
	<div class="navbar-fixed">
      <nav>
	    <div class="nav-wrapper red darken-3">
	    <div class = "col s12">
	      <a href="index.html" class="brand-logo left title">free food @ cmu</a>
          
          <div id="topright">
              <ul id="nav-mobile" class="side-nav">
                <li><a href="events.html">events</a></li>
                <li><a href="calendar.html">calendar</a></li>
                <li><a href="add.html">add</a></li>
              </ul>
          </div>
          
          <div class="searchbar">
              <form>
                <div class="input-field">
                  <input id="search" type="text" required>
                  <label for="search"><i class="mdi-action-search"></i></label>
                </div>
              </form>
          </div>
          
	    </div>
	    </div>
	  </nav>
	 </div>
	 
	<div class = "row">
		<div class = "container" id ="centerContent">
            <div class = "row">
                <div class = "col s2 offset-s8">
                    <div id="status"></div>
                    <div class = "row"></div>
                    <div class = "col s2 offset-s8"></div>
                    <div id="statusLogin">
	                    <a id="facebooklogin" class="waves-effect waves-light btn">login with facebook</a>
                    </div>
                    <a class="waves-effect waves-light btn-large red darken-2 buttonWidth">BROWSE EVENTS</a>
                    
                    

                </div>
            </div>        
        </div>
    </div>

    </body>

    <footer class="page-footer red darken-3">
      <div class="footer-copyright">
        <div class="container">
         free food @ cmu: A <a href="http://tartanhacks.com/">TartanHacks 2015</a> project by Ally Sorge, Chris Barker, and Maggie Yu.
                            <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>

        </div>

      </div>
    </footer>

  </html>
>>>>>>> FETCH_HEAD:index.html
