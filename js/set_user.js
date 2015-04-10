(function() {

    // user_data.on('value', function (snapshot) {
    //   current_id = snapshot.val();
    // });
    //
    //

    function checkUser(entered_name){
      var get_users = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/');
      get_users.on('value', function (snapshot) {
        var users = snapshot.val();
        if(users[entered_name]){
          console.log('great');
        } else {
          // var get_user = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+entered_name);
          // var new_user = { entered_name: { "burning_man" : { "slug" : "burning_man1", "volume" : 0.5 }, "space" : { "slug" : "space2", "volume" : 0.5} } }
          users[entered_name] = { "burning_man" : { "slug" : "burning_man1", "volume" : 0.5 }, "space" : { "slug" : "space2", "volume" : 0.5} }
          get_users.set(users);
        }
      })
    };

    $('#nameButton').on('click', function(){
      var entered_name = $('#nameInput').val();
      checkUser(entered_name);
    })

  $(document).ready(function() {
    // checkUser();

    });

})();
