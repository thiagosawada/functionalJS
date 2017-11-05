var nonsense = function(string) {

  var blab = function() {
    alert(string);
  }

  setTimeout(blab, 2000);

  return blab;

}

var blabLater = nonsense('Fora Temer');

var blabAgainLater = nonsense('Temer golpista');

var lastNameTrier = function(name) {

  var lastName = function(last_name) {
    console.log(name, last_name);
  }

  return lastName;
}

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');
firstNameFarmer('Jane');
firstNameFarmer('Lynne');

var storyWriter = function() {
  var story = '';
  return {
    addWords: text => {
      story += text + ' ';
      console.log(story.trim()); },
    erase: () => { text = ''; console.log(text) }
  };
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
farmLoveStory.addWords('It saw a friendly face.');

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
storyOfMyLife.addWords('I ate some ice cream.');
storyOfMyLife.erase();

var Toaster = function() {
  var maxTemp = 500;
  var temp = 0;

  return {
    setTemp: function(newTemp) {
      if(newTemp > maxTemp) {
        console.log("That temp is too high!");
      } else {
        temp = newTemp;
      }
    }
  }
}

var myToaster = Toaster();

myToaster.setTemp(300);

