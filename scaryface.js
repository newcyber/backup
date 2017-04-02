$(document).ready(function() {
$("#audio").stop("true").delay('1000').queue(function() {
$(this).html('<div class="scaryface"/><audio class="audio" preload="auto" loop="loop" autoplay="autoplay"><source src="https://rawgit.com/mastamvan/backup/master/voice.mp3" type="audio/mp3" /><source src="https://rawgit.com/mastamvan/backup/master/voice.mp3" type="audio/mpeg"></audio>');
});
});