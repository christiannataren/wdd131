let year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
let last_time = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + last_time;