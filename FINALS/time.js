function updateTime() {
    const now = new Date();
  
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateString = `${month}/${day}/${year}`;
  
    document.getElementById('time-text').innerText = `Current Date: ${dateString} | Current Time: ${timeString}`;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  

    const checkbox = document.getElementById("show-password");
    const passwordField = document.getElementById("password");
    checkbox.addEventListener("change", () => {
      passwordField.type = checkbox.checked ? "text" : "password";
    });
  