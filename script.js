// All needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attending = document.getElementById("attendeeCount");
//const teamList =document.querySelector("team-list");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handle Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get Values
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    console.log(name, teamName);

    //Increment count
    count++
    console.log("Total Check-ins: ", count);

    //Update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    console.log(`Progress: ${percentage}`);
    const progressBar = document.getElementById("progressBar");

    progressBar.style.width = percentage;

    attending.textContent = parseInt(attending.textContent) + 1;

    //Update team counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    //adding team names below
    //for(let i=0; i < teamList.length; i++) {
        //const ul = document.createElement("ul");
        //li.textContent = teamList[i];
        //teamList.appendChild(li);
    //};

    //Show Welcome message
    //const success = document.getElementsByClassName("success-message");
    const message= `Welcome, ${name} from ${teamName}!`;
    console.log(message);

    form.reset();
});