angular
    .module('quiz')
    .controller('listCtrl', listController);

listController.$inject=['data'];

function listController(data){
    this.data = data.playersData;
    this.showInfo = showInfo;
    this.currentPlayer={};
    this.search = "";
}

function showInfo(player){
    this.currentPlayer = player;
}
