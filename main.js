var cookies = 0;
var cock_size = 5;
var ball_size = 1;
var ball_capacity = 100;
var ball_amount = 0
var milkers = 0
var arousal = 0

function cookieClick(number){
    cookies = cookies + ball_amount;
    ball_amount = 0;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("ball_amount").innerHTML = ball_amount
};

function shaftstroke(){
    ball_amount += cock_size * ball_size;
    if(ball_amount >= ball_capacity){
        ball_amount = ball_capacity;
    };
    document.getElementById('ball_amount').innerHTML = ball_amount;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,milkers));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        milkers = milkers + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('milkers').innerHTML = milkers;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,milkers));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyBalls(){
    var ballCost = Math.floor(10 * Math.pow(1.1,ball_size));     //works out the cost of this cursor
    if(cookies >= ballCost){                                   //checks that the player can afford the cursor
        ball_size = ball_size + 1;                                   //increases number of cursors
    	cookies = cookies - ballCost;                          //removes the cookies spent
        document.getElementById('ball_size').innerHTML = ball_size;  //updates the number of cursors for the user
        document.getElementById('ball_size2').innerHTML = ball_size;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,ball_size));       //works out the cost of the next cursor
    document.getElementById('ballCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyArousal(){
    var arousalCost = Math.floor(10 * Math.pow(1.1,arousal));     //works out the cost of this cursor
    if(cookies >= arousalCost){                                   //checks that the player can afford the cursor
        arousal = arousal + 1;                                   //increases number of cursors
    	cookies = cookies - arousalCost;                          //removes the cookies spent
        document.getElementById('arousal').innerHTML = arousal;  //updates the number of cursors for the user
        document.getElementById('arousal2').innerHTML = arousal;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,arousal));       //works out the cost of the next cursor
    document.getElementById('arousalCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyCapacity(){
    var capacityCost = 0.95*ball_capacity;     //works out the cost of this cursor
    if(cookies >= capacityCost){                                   //checks that the player can afford the cursor
        ball_capacity = ball_capacity + 100;                                   //increases number of cursors
    	cookies = cookies - capacityCost;                          //removes the cookies spent
        document.getElementById('capacity').innerHTML = ball_capacity;  //updates the number of cursors for the user
        document.getElementById('capacity2').innerHTML = ball_capacity;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = capacityCost = 0.95*ball_capacity;       //works out the cost of the next cursor
    document.getElementById('capacityCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyCock(){
    var cockCost = Math.floor(100 * Math.pow(1.1,cock_size));
    if(cookies >= cockCost){
        cock_size = cock_size +1;
        cookies = cookies - cockCost;
        document.getElementById('cookies').innerHTML = cookies;
        document.getElementById('cock_size').innerHTML = cock_size
    };
    var nextCost = Math.floor(100 * Math.pow(1.1, cock_size));
    document.getElementById('CockCost').innerHTML = nextCost;
};
        
    

function ballbuildup(){
    ball_amount = ball_amount + ball_size*arousal;
    if(ball_amount >= ball_capacity){
        ball_amount = ball_capacity
    };
    document.getElementById('ball_amount').innerHTML = ball_amount;
};

function milker(){
    if(ball_amount >= milkers){
        ball_amount = ball_amount - milkers;
        cookies = cookies + milkers;
    };
    if(ball_amount < milkers){
        cookies = cookies + ball_amount;
        ball_amount = 0;
    };
    document.getElementById('ball_amount').innerHTML = ball_amount;
    document.getElementById('cookies').innerHTML = cookies;
};
    

window.setInterval(function(){
	
    ballbuildup();
	milker();
}, 1000);