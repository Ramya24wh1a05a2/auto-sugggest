  
function randomUser() {
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data.results[0];
        var fullName = user.name.title + " " + user.name.first + " " + user.name.last;
        document.getElementById("userImage").src=user.picture.large;

    //to do : update for name and gender !

   //name()
        document.getElementById("userName").innerText=fullName

    //gender
        document.getElementById("userGender").innerText=user.gender
    })
    .catch(function(err){
        console.log("Error : " + err);
    })
}