const maleUser = {
    name: "John Doe",
    gender: "Male",
    image: "../images/john.png"
};

const femaleUser = {
    name: "Jane Doe",
    gender: "Female",
    image: "../images/jane.png"
};

let currentUser = maleUser;

function toggleUser() {

    currentUser =
        currentUser.gender === "Male"
            ? femaleUser
            : maleUser;

    document.getElementById("userName").innerText =
        currentUser.name;

    document.getElementById("userGender").innerText =
        currentUser.gender;

    document.getElementById("userImage").src =
        currentUser.image;
}