/*variables we will need for the game*/
var choices = ["rock", "paper", "scissors"]; /*a list that contains different variables"*/

var played= 0;
var won = 0;
var lost = 0;
var draw = 0;



/*Listen for the button clicks the hashtag calls the button in html, then it is called via id and stored in a variable. */
$("#rock").click(function(event){
var play_you = 'rock';
$("#play_you").text(play_you)
var play_machine= computer_move();
compare(play_you, play_machine);
});


$("#paper").click(function(event){
var play_you = 'paper';
$("#play_you").text(play_you)
var play_machine= computer_move();
compare(play_you, play_machine);
});


$("#scissors").click(function(event){
var play_you = 'scissors';
$("#play_you").text(play_you)
var play_machine= computer_move();
compare(play_you, play_machine);
});

/*Randomise value for what the computer would do */



function computer_move(){
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0; /*want to go over maximum as its excluded but minimum is included*/

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  console.log('move: ' + play_machine);


  return play_machine;
}

function compare(you, machine){

  var verdict = 'lose';


  if ( you == machine ) {
    verdict = 'draw';
  }

  if ((you=="rock") && (machine == "scissors")){
    verdict='win';
  }

  if ((you=="paper") && (machine == "rock")){
    verdict = 'win';
  }

  if ((you=="scissors") && (machine == "paper")){
    verdict = 'win';
  }

  if (verdict == 'win') {
    won++;
    $("#game_won").text(won);
  }

  if (verdict == 'lose') {
    lost++;
    $("#game_lost").text(lost);
  }

  if (verdict == 'draw') {
    draw++;
    $("#game_draw").text(draw);
  }

   $("#verdict").text(verdict);

   played++;
   $("#game_played").text(played);


}
