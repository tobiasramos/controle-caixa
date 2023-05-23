const v_amount = document.getElementById("amount")
const v_date = document.getElementById("date")
const v_observation = document.getElementById("observation")
const v_revenue = document.getElementById("revenue")
const v_expense = document.getElementById("expense")
const btn_add = document.getElementById("btn-add")
const exhibition = document.getElementById("exhibition")
const tb = document.getElementById("tb")


btn_add.addEventListener("click", () => {
    let qtdRows = tb.rows.length
    let row = tb.insertRow(qtdRows)
    let amount = row.insertCell(0)
    let date = row.insertCell(1)
    let observation = row.insertCell(2)
    let typeMovement = row.insertCell(3)
    let action = row.insertCell(4)

    let validadeChecked

    if (v_revenue.checked) {
        validadeChecked = `<p class="blueRevenue">Receita</p>`
    }
    if (v_expense.checked) {
        validadeChecked = `<p class="vermExpense">Despesa</p>`
    }

    amount.innerHTML = `R$ ${v_amount.value},00`
    date.innerHTML = v_date.value
    observation.innerHTML = v_observation.value
    typeMovement.innerHTML = validadeChecked
    action.innerHTML = `<i class="fas fa-trash detele"></i>`
})

let initialValueRevenue = 0
let initialValueExpense = 0

function sum() {
    const enteredValue = parseFloat(v_amount.value)

    if (!isNaN(enteredValue) && v_revenue.checked) {
        initialValueRevenue += enteredValue
        document.getElementById("totalRevenue").innerHTML = `R$ ${initialValueRevenue},00`
    } else if (!isNaN(enteredValue) && v_expense.checked) {
        initialValueExpense += enteredValue
        document.getElementById("totalExpense").innerHTML = `R$ ${initialValueExpense},00`
    }
}