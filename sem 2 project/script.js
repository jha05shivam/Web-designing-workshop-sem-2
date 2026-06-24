let expenses = [];

const budget = 5000;

function addExpense(){

    const name =
    document.getElementById("name").value;

    const amount =
    Number(document.getElementById("amount").value);

    const category =
    document.getElementById("category").value;

    const date =
    document.getElementById("date").value;

    if(!name || !amount || !date){
        alert("Fill all fields");
        return;
    }

    const expense = {
        id: Date.now(),
        name,
        amount,
        category,
        date
    };

    expenses.push(expense);

    updateUI();

    document.getElementById("name").value="";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";
}

function updateUI(){

    const container =
    document.getElementById("expenseContainer");

    container.innerHTML="";

    let total = 0;

    expenses.forEach(expense=>{

        total += expense.amount;

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML=`
        <div>
            <h3>${expense.name}</h3>
            <p>${expense.category}</p>
            <small>${expense.date}</small>
        </div>

        <div>
            ₹${expense.amount}
            <button class="deleteBtn"
            onclick="deleteExpense(${expense.id})">
            Delete
            </button>
        </div>
        `;

        container.appendChild(card);
    });

    document.getElementById("totalExpense").innerText = total;

    document.getElementById("entryCount").innerText =
    expenses.length;

    document.getElementById("budgetLeft").innerText =
    budget-total;

    if(total > budget*0.9){
        document.getElementById("warning").innerText =
        "⚠️ Budget limit almost reached!";
    }
    else{
        document.getElementById("warning").innerText="";
    }
}

function deleteExpense(id){

    expenses =
    expenses.filter(exp=>exp.id!==id);

    updateUI();
}

function searchExpense(){

    const search =
    document.getElementById("search")
    .value.toLowerCase();

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        if(card.innerText.toLowerCase().includes(search)){
            card.style.display="flex";
        }
        else{
            card.style.display="none";
        }

    });
}