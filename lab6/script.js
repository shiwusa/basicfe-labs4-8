window.onload = function init () {
    const usersDiv = document.querySelector("#users");
    const table = document.createElement("table");
    usersDiv.append(table);
    const button = document.querySelector('#download')
    button.addEventListener("click", () => showFromServer(5));
    
}

const apiRequestLoop = function(inp) {
    let promiseArray = [];
    const queryURL = "https://randomuser.me/api";

    for (let i = 0; i < inp; i++) {
      promiseArray.push(
        fetch(queryURL)
        .then(function(response) {
            return response.json();
            })
        );
    }
    return promiseArray;
}

function showFromServer(count) {
    const status = document.querySelector('#download-status');
    Promise.all(apiRequestLoop(count))
    .then(value => {
        status.innerText = "Success!";
        value.forEach(user => {
            displayUsersAsATable(user);;
        });
    }, reason => {
        status.innerText = "Something went wrong: " + reason;
    });
}

function displayUsersAsATable(user) {
    const table = document.querySelector("table");
    let row = table.insertRow();

    let img = new Image();
    img.src = user.results[0].picture.large;
    img.alt = 'profile-picture';

    let pictCell = row.insertCell();
    pictCell.appendChild(img);

    let countryCell = row.insertCell();
    countryCell.innerHTML = "Country:<br>" + user.results[0].location.country;

    let emailCell = row.insertCell();
    emailCell.innerHTML = "Email:<br>" + user.results[0].email;

    let phoneCell = row.insertCell();
    phoneCell.innerHTML = "Phone:<br>" + user.results[0].phone;

    var coordCell = row.insertCell();
    coordCell.innerHTML = "Latitude: " + user.results[0].location.coordinates.latitude + "<br>";
    coordCell.innerHTML += "Longitude: " + user.results[0].location.coordinates.longitude;

}