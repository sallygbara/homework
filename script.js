import Action from "./classes/Action.js";
import ActionsManager from "./classes/ActionsManager.js";

let manager = new ActionsManager();
// manager.addAction(new Action("income", "salary", 40000));
// manager.addAction(new Action("income", "babysitter", 700));
// manager.addAction(new Action("expense", "ikea", 5000));

// console.log(manager.actions);
// console.log(manager.balance);

function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById("actions").innerHTML += `<tr class=${action.type === "income" ? "text-success" : "text-danger"
            }>
                <td>${action.description}</td>
                <td>${action.amount}</td>
                <td onclick="updateAmount(${action.id
            })"><i class="fa-solid fa-pen-to-square"></i></td>
                <td onclick="deleteAction(${action.id
            })"><i class="fa-solid fa-trash"></i></td>
              </tr>`;
    }
    document.querySelector(".alert").innerHTML = `Balance: ${manager.balance}`;
}

window.addNewAction = () => {
    // get data from select & inputs
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    // add action to actions array
    manager.addAction(new Action(type, description, amount));
    // show current actions in table
    showActionsInTable();

    // clear inputs
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
};

window.updateAmount = (actionId) => {
    let newAmount = prompt("Enter new amount please: ");
    if (newAmount == null || newAmount == "") alert("Sorry wrong input");
    else {
        manager.updateAction(actionId, +newAmount);
        showActionsInTable();
    }
};

window.deleteAction = (actionId) => {
    if (confirm("Are you sure?")) {
        manager.deleteAction(actionId);
        showActionsInTable();
    }
};

showActionsInTable();