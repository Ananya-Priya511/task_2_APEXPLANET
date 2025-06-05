function addTask() {
  const taskText = document.getElementById("task").value;
  if (taskText === "") return;
  const li = document.createElement("li");
  li.textContent = taskText;
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("task").value = "";
}