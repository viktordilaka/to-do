const app = () => {
  const buttons = document.querySelectorAll(".addTaskButton");
  const ul = document.querySelector("ul");
  console.log(buttons);
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      // Create li
      const li = document.createElement("li");
      // Add text to li
      li.innerHTML = button.innerHTML;
      // Append li to ul
      ul.appendChild(li);
      // Create complete button
      const completeBtn = document.createElement("button");
      // Append button to li
      li.append(completeBtn);
      // Add text to completeBtn
      completeBtn.innerHTML = "Complete";
      // Add EventListener to completeBtn
      completeBtn.addEventListener("click", () => {
        // add class completed
        li.classList.add("completed");
      });
      // Add removeBtn
      const removeBtn = document.createElement("button");
      // Add text to removeBtn
      removeBtn.innerHTML = "Remove";
      // Append removeBtn to li
      li.appendChild(removeBtn);
      // Add class to removeBtn
      removeBtn.classList.add("remove");
      // Add event to removeBtn
      removeBtn.addEventListener("click", () => {
        li.remove();
      });
    })
  );
};
window.addEventListener("load", app);
