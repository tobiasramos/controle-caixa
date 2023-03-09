const v_amount = document.querySelector("#amount")
const v_date = document.querySelector("#date")
const v_observation = document.querySelector("#observation")
const v_revenue = document.querySelector("#revenue")
const v_expense = document.querySelector("#expense")
const btn = document.querySelector(".btn-add")
const test =document.querySelector("#root")

btn.addEventListener("click",() => {
    test.innerHTML = `<p>Valor: ${v_amount.value} Data: ${v_date.value} Observação:${v_observation.value} Tipo da movimentação: </p>`
})