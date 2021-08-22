function talk(){
    var know ={
        "Hi":"Hello",
        "How Are You?":"Great !",
        "Bye":"Have A Nice Day !",
        "Hello":"Hi , Whats Up"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "I do not understand .";
    }
}