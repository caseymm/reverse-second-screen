(function() {
  var base_url = window.location.href;
  var username;
  var hash;
  var html_file;

    function checkUser(entered_name){
      var get_users = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/');
      get_users.once('value', function (snapshot) {
        var users = snapshot.val();
        if(users[entered_name]){
        } else {
          get_users.on('child_changed', function (snapshot) {
            users = snapshot.val();
          })
          users[entered_name] = { "burning_man" : { "slug" : "burning_man1", "volume" : 0.5 }, "space" : { "slug" : "space1", "volume" : 0.5} }
          get_users.set(users);
        }
      })
    };

    function renderLinks(){
      var large = base_url+'r2s/#'+username;
      var small = base_url+html_file+'#'+username;
      $('#large-screen').html('<a href="'+large+'" target="_blank">'+large+'</a>');
      $('#small-screen').html('<a href="'+small+'" target="_blank">'+small+'</a>');
      // $('.arrow-down.gray').slideDown();
      $('.link-gen').slideDown();
    }

    $('#nameButton').on('click', function(){
      var entered_name = $('#nameInput').val();
      username = entered_name;
      checkUser(entered_name);
      $('#nameInput').val('');
      // $('#current-username').html('Current username: '+username);
      renderLinks();
    })

    $('#space').on('click', function(){
      hash = 'space';
      html_file = 'space.html';
      // renderLinks();
    })

    $('#burning_man').on('click', function(){
      hash = 'burning_man';
      html_file = 'burning_man.html';
      // renderLinks();
    })

    $('.feature').on('click', function(){
      $('.feature').removeClass('selected');
      $(this).addClass('selected');
    })



  $(document).ready(function() {
    // checkUser();

    });

})();
