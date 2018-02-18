
<script type="text/javascript">

var computerChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
var playerChoice = document.getElementById("input");
var computerChoice = document.getElementById("computer-pick")
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

document.onkeyup = function(event) {
var userGuess = event.key;
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}













</script>