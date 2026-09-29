// All needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attending = document.getElementById("attendeeCount");
const greet = document.getElementById('greeting');
const success = document.getElementsByClassName("success-message");
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
    if (count < 51) {
        count++;
        console.log("Total Check-ins: ", count);
    }

    //Update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    console.log(`Progress: ${percentage}`);
    const progressBar = document.getElementById("progressBar");

    progressBar.style.width = percentage;

    if (count < 51){
        attending.textContent = parseInt(attending.textContent) + 1;
    }

    //Update team counter
    const teamCounter = document.getElementById(team + "Count");
     
    if (attending.textContent, count < 51){
        teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
     }

    //adding team names below
    //while(i <= teamList.length) {
        //i++
        //li.textContent = teamList[i];
        //teamList.appendChild(li);
    //}

    //Show Welcome message
    //
    const message= `Welcome, ${name} from ${teamName}!`;
    console.log (message);
    greet.textContent = (message);
    greet.style.display= "inline-block";

    form.reset();
});