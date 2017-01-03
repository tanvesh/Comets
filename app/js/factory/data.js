/**
 * Created by Tanvesh on 12/25/2016.
 */
angular
    .module('quiz')
    .factory('data', data);

function data() {
    var obj = {
        playersData: playersData
    };
    return obj;
}

var playersData = [
    {
        name : "Tanvesh",
        age : 24,
        stance : "Right hand bat",
        jersey : 10,
        image : "images/Tan.jpg",
        description : "LinkedIn was built to help professionals achieve more in their careers, and every day millions of people use our products to make connections, discover opportunities, and gain insights. Our global reach means we get to make a direct impact on the world’s workforce in ways no other company can. We’re much more than a digital resume – we transform lives through innovative products and technology."
    },{
        name : "Praveen",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Praveen.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Pratik",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Pratik.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Pranav",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Pranav.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Chiranjeev",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Chiru.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Sudhindra",
        age : 25,
        stance : "Right hand bat",
        jersey : 8,
        image : "images/Sudhi.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Karthik",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Karthik.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Praharsh",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Praharsh.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Sachin",
        age : 25,
        stance : "Right hand bat",
        jersey : 1,
        image : "images/Sachin.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    },{
        name : "Ajay",
        age : 25,
        stance : "Right hand bat",
        jersey : 11,
        image : "images/Ajay.jpg",
        description : "Ever wondered what CHUTIYA means? He is the prime example."
    }
];

