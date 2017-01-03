/**
 * Created by Tanvesh on 12/25/2016.
 */
angular
    .module('quiz')
    .controller('homeCtrl', homeController);


function homeController() {
        this.myInterval = 3000;
        this.slides = [
            {src: 'images/Nationals1.jpg'},
            {src: 'images/Nationals2.jpg'},
            {src: 'images/Nationals3.jpg'},
            {src: 'images/Regionals1.jpg'}
        ];
}