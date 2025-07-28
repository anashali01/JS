let task = document.querySelector('input[name="task"]');
let display = document.querySelector("table tbody");
let add = document.querySelector("#add");
let idx = 1;
let list = [];
add.addEventListener("click",() => {
  display.innerHTML += `
        <tr>
        <td>${idx}</td>
        <td>${task.value}</td>
        </tr>
    `;
    idx++;

    list.push(task.value);
    console.log(list); 
    task.value = "";
});
