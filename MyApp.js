var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.games = [
	{name:'Super Mario Bros', img:'img/super mario bros.jpg'},
	{name:'Legend of Zelda', img:'img/legend of zelda.jpg'},
	{name:'Metroid', img:'img/metroid.jpg'},
	{name:'Excitebike', img:'img/excitebike.jpg'},
	{name:'Castlevania', img:'img/castlevania.png'},
	{name:'Super Mario Bros 2', img:'img/super mario bros 2.jpg'},
	{name:'Metal Gear', img:'img/metal gear.png'},
	{name:'Blaster Master', img:'img/blaster master.png'},
	{name:'Contra', img:'img/contra.jpg'},
	{name:'Rygar', img:'img/rygar.gif'},
	{name:'Final Fantasy', img:'img/final fantasy.jpg'},
	{name:'Life Force', img:'img/life force.jpg'},
	{name:'Mega Man', img:'img/mega man.jpg'}];

});