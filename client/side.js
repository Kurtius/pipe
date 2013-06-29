if (Meteor.isClient) {

  Meteor.startup(function () {
    

    Template.masthead.rendered = function ( ) {
      console.log("setting side functions");
      
      $('#side').animate({ width: ['toggle', 'swing'],}, 1);
      $('#nav-side').on('click', function() {
          $('#nav-side').toggleClass('active');
          $('#side').animate({ width: ['toggle', 'swing'],}, 300);
        
        console.log("toggle side");
      });    
    

    }


  });
};