(function() {
  function getVideoList(feature){
    var videos = new Firebase('https://sweltering-torch-4591.firebaseIO.com/features/'+feature);
    video_list = [];
    videos.on('value', function (snapshot) {
      var vids = snapshot.val();
      $.each(vids, function(key, value){
        video_list.push(key);
      })
    });
    return video_list;
  }

  function changeClass(user, feature, item){
    // current_user = user;
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');
    var itemField = $('#itemInput');
    var itemList = $('#example-items');
        user_data.set(item);

    changeVolume(user, feature);
  }

  function changeVolume(user, feature){
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');
    var user_volume = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/volume');

    user_volume.on('value', function (snapshot){
      var current_vol = snapshot.val();
      $(function() {
        $( "#slider" ).slider({
          range: "min",
          min: 0,
          max: 10,
          value: current_vol,
          slide: function( event, ui ) {
            // user_volume.set(ui.value/10);
            var new_vol = ui.value/10;
            user_volume.set(new_vol);

          }
        });
      });
    });

    };



  $(document).ready(function() {
    var url = window.location.href;
    var hashes = url.split('#');
    hashes.splice(0,1);
    var user = hashes[0],
        feature = hashes[1];
    var vid_list = getVideoList(feature);

    var newPosition = 0;
    var currentPosition = -1;

$(window).scroll(function (event) {
    var maxPosition = vid_list.length;
    if (maxPosition == 0) {return};

    var scroll = $(window).scrollTop();

    if (scroll.between(1,500)){
      newPosition = 0;
    } else if (scroll.between(500,900)){
      newPosition = 1;
    } else if (scroll.between(900,1200)){
      newPosition = 2;
    } else {
      newPosition = 3;
    }
    // console.log("new: " + newPosition + " && max: " + maxPosition);

    if (newPosition < maxPosition){
      if (newPosition !== currentPosition){
        console.log("changing to: " + vid_list[newPosition]);
        changeClass(user, feature, vid_list[newPosition]);
        currentPosition = newPosition;
      };
    }

});

Number.prototype.between = function (min, max) {
    return this > min && this < max;
};

  });
})();
