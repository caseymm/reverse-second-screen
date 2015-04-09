(function() {

  function loadVideo(feature){
    var videos = new Firebase('https://sweltering-torch-4591.firebaseIO.com/features/'+feature);
    videos.on('value', function (snapshot) {
      var vids = snapshot.val();
      $.each(vids, function(key, value){
        $('#vids-here').append('<video id="'+key+'" width="100%" style="min-height:'+$('html').height()+'px;" height="'+$('html').height()+'px" loop="true"><source src="'+value+'" type="video/mp4"></video>')
      })
    });
  }

  function changeClass(user, feature, item){
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');

    user_data.on('value', function (snapshot) {
      current_id = snapshot.val();
      triggerPlay(current_id);
      changeVolume(user, feature);
    });
  }

  function changeVolume(user, feature){
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/slug');
    var user_volume = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature+'/volume');

    user_data.on('value', function (snapshot) {
      current_id = snapshot.val();
      user_volume.on('value', function (snapshot) {
        current_vol = snapshot.val();
        triggerVolume(current_id, current_vol);
      });

    });


  }

  function triggerPlay(current_id){
    $('video').removeClass('bgvid');
    $('video').get(0).pause();
    $('#'+current_id).addClass('bgvid');
    $('#'+current_id).get(0).play();
  }

  function triggerVolume(current_id, current_vol){
    $('#'+current_id).get(0).volume = current_vol;
  }

  $(document).ready(function() {
    var url = window.location.href;
    var hashes = url.split('#');
    hashes.splice(0,1);
    var user = hashes[0],
        feature = hashes[1];
    loadVideo(feature);
    changeClass(user, feature);


  });
})();
