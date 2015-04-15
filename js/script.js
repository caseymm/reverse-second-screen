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

  function startSession(user, feature){
    var last_loaded = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/last_loaded');
    last_loaded.set(feature);
  }


  $(document).ready(function() {
    var url = window.location.href;
    var new_url = url.replace("%23", "#");
    var index_to_hash = new_url.split('#');
    // Clean this
    var feature = index_to_hash[0].replace(window.location.origin, '').replace('/', '').replace('.html', '');
    var hashes = new_url.split('#');
    hashes.splice(0,1);
    var user = hashes[0];

    changeVolume(user, feature);
    startSession(user, feature);

    var vid_list = getVideoList(feature);

    var newPosition = 0;
    var currentPosition = -1;

    var hc = $(document).height()/5;
    // hc ... height chunk. 20% of the document height

$(window).scroll(function (event) {
    var maxPosition = vid_list.length;
    if (maxPosition == 0) {return};

    var scroll = $(window).scrollTop();

    if (scroll.between(1,hc)){
      newPosition = 0;
    } else if (scroll.between(hc,hc*2)){
      newPosition = 1;
    } else if (scroll.between(hc*2,hc*3)){
      newPosition = 2;
    } else if (scroll.between(hc*3,hc*4)){
      newPosition = 3;
    } else {
      newPosition = 4;
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
