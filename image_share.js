if (Meteor.isClient) {
  console.log("This is the client side");
  // Likes start at 0
  Session.setDefault('counter1', 0);
  Session.setDefault('counter2', 0);
  Session.setDefault('counter3', 0);
  Session.setDefault('counter4', 0);

  // Array with cartoon strips
  var strips_data = [
    {
      strip_order: "1",
      strip_src: "snoopy1.jpg",
      strip_alt: "Snoopy is playing football"
    },
    {
      strip_order: "2",
      strip_src: "snoopy2.jpg",
      strip_alt: "The ball is thrown"
    },
    {
      strip_order: "3",
      strip_src: "snoopy3.jpg",
      strip_alt: "The ball falls down the bird"
    },
    {
      strip_order: "4",
      strip_src: "snoopy4.jpg",
      strip_alt: "Snoopy wonders if the bird is still alive!"
    }
  ];

  Template.cartoon.helpers({strips: strips_data});

  Template.cartoon.helpers({
    counter1: function () {
      return Session.get('counter1');
    },
    counter2: function () {
      return Session.get('counter2');
    },
    counter3: function () {
      return Session.get('counter3');
    },
    counter4: function () {
      return Session.get('counter4');
    }
  });

  Template.cartoon.events({
    'click button#counter1': function () {
      // increment the counter of likes when button for strip 1 is clicked
      Session.set('counter1', Session.get('counter1') + 1);
    },
    'click button#counter2': function () {
      // increment the counter of likes when button for strip 2 is clicked
      Session.set('counter2', Session.get('counter2') + 1);
    },
    'click button#counter3': function () {
      // increment the counter of likes when button for strip 3 is clicked
      Session.set('counter3', Session.get('counter3') + 1);
    },
    'click button#counter4': function () {
      // increment the counter of likes when button for strip 4 is clicked
      Session.set('counter4', Session.get('counter4') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("This is the server side");
  });
}
