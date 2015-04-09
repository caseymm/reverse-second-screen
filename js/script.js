(function() {

  function loadVideo(feature){
    var videos = new Firebase('https://sweltering-torch-4591.firebaseIO.com/features/'+feature);
    videos.on('value', function (snapshot) {
      var vids = snapshot.val();
      $.each(vids, function(key, value){
        $('#vids-here').append('<video id="'+key+'" width="100%" height="700px" controls><source src="'+value+'" type="video/mp4"></video>')
      })
    });
  }

  function changeClass(user, feature){
    var user_data = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+user+'/'+feature);
    var itemField = $('#itemInput');
    var itemList = $('#example-items');

    itemField.keypress(function (e) {
      if (e.keyCode == 13) {
        var item = itemField.val();
        user_data.set(item);
        itemField.val('');
      }
    });

    user_data.on('value', function (snapshot) {
      var data = snapshot.val();
      console.log(data);
    });
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
