function box(n) {
    this.name = document.getElementById(n);
  }
  
  var boxDiv = {
    red: function() {
      this.name.style.background = '#f00';
    },
    blue: function() {
      this.name.style.background = '#00f';
    },
    big: function() {
      this.name.style.width = '100px';
      this.name.style.height = '100px';
    },
    small: function() {
      this.name.style.width = '20px';
      this.name.style.height = '20px';
    }
  };
  
  box.prototype = Object.create(boxDiv);
  
  var b = new box('area');
  
  document.getElementById('r').addEventListener('click', function() {
    b.red();
  });
  document.getElementById('b').addEventListener('click', function() {
    b.blue();
  });
  document.getElementById('big').addEventListener('click', function() {
    b.big();
  });
  document.getElementById('small').addEventListener('click', function() {
    b.small();
  });