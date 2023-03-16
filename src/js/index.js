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

    amount.innerHTML = v_amount.value
    date.innerHTML = v_date.value
    observation.innerHTML = v_observation.value
    typeMovement.innerHTML = v_amount.value
    action.innerHTML = "Excluir"
})