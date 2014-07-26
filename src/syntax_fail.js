Fail = {
  herp: function() {
    var foo, bar, baz, qux;

    for(i = 0; i < 10; i++) {
      var j = i * 2;
    }
  } /* comma should be here */

  derp: function() {
    console.log('Oh dear.');
  }
}
