function talk(){
    var know ={
        "Hi":"Hello",
        "How are you?":"Great !",
        "Bye":"Have A Nice Day !",
        "Hello":"Hi , Whats Up",
        "I am sad": "Its gunna be alright!",
        "What is pi?" : "3.14",
        "What the circumference of a circle?" : "3.14 x diameter",
        "Area formula of a triangle" : "(base x height) /2",
        "Squareroot of a neg number" : "doesn't exist",
        "Should I attend class tomorrow?" : "YES! if possible"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}