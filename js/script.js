(function() {
  // var current_id;
  // var current_user;

  function changeClass(user, feature, item){
    // current_user = user;
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');
    var itemField = $('#itemInput');
    var itemList = $('#example-items');
        user_data.set(item);

    // itemField.keypress(function (e) {
    //   if (e.keyCode == 13) {
    //     var item = itemField.val();
    //     user_data.set(item);
    //     itemField.val('');
    //   }
    // });

    changeVolume(user, feature);
  }

  function changeVolume(user, feature){
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');
    var user_volume = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/volume');

    $('#volumeButton').on('click', function(){
      var new_vol = $('#volumeInput').val();
      user_volume.set(new_vol);
    })

    };



  $(document).ready(function() {
    var url = window.location.href;
    var hashes = url.split('#');
    hashes.splice(0,1);
    var user = hashes[0],
        feature = hashes[1];

var newPosition = 0;
var currentPosition = 1;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll.between(1,500)){
      newPosition = 1;
    } else if (scroll.between(500,800)){
      newPosition = 2;
    } else if (scroll.between(800,1200)){
      newPosition = 3;
    } else {
      newPosition = 4;
    }

    console.log("new: " + newPosition + " old: " + currentPosition);

    if (newPosition !== currentPosition){
      console.log("changing!");
      if (newPosition % 2 == 0){
        console.log("cherry1");
        changeClass("luke", "cherry_blossom", "cherry1");   
      } else {
        console.log("cherry2");
        changeClass("luke", "cherry_blossom", "cherry2");              
      }
      currentPosition = newPosition;
    };
});

Number.prototype.between = function (min, max) {
    return this > min && this < max;
};

  });
})();
