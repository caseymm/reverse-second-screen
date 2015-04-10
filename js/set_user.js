(function() {

    function checkUser(entered_name){
      var get_users = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/');
      get_users.once('value', function (snapshot) {
        var users = snapshot.val();
        if(users[entered_name]){
        } else {
          get_users.on('child_changed', function (snapshot) {
            users = snapshot.val();
          })
          users[entered_name] = { "burning_man" : { "slug" : "burning_man1", "volume" : 0.5 }, "space" : { "slug" : "space2", "volume" : 0.5} }
          get_users.set(users);
        }
      })
    };

    $('#nameButton').on('click', function(){
      var entered_name = $('#nameInput').val();
      checkUser(entered_name);
      $('#nameInput').val('');
    })

  $(document).ready(function() {
    // checkUser();

    });

})();
