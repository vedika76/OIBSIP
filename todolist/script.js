// Show current date and time
function updateDateTime() {
  const now = new Date();
  document.getElementById("date").textContent = now.toDateString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Add Task Function
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const taskText = taskInput.value.trim();
  const timeText = taskTime.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task-item";

  const leftDiv = document.createElement("div");
  leftDiv.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const spanText = document.createElement("span");
  spanText.className = "task-text";
  spanText.textContent = taskText;

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(spanText);

  const timeSpan = document.createElement("span");
  timeSpan.className = "task-time";
  timeSpan.textContent = timeText ? formatTime(timeText) : "";

  li.appendChild(leftDiv);
  li.appendChild(timeSpan);

  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskTime.value = "";
}

// Format 24-hour time to 12-hour format
function formatTime(timeStr) {
  const [hour, minute] = timeStr.split(":");
  const h = parseInt(hour);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${minute} ${ampm}`;
}
