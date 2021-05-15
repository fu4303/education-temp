const deleteBtns = document.querySelectorAll('.remove')


let totalPrice = document.querySelector('.t-price').textContent
totalPrice = Number(totalPrice.split('.')[1])

deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const price = e.target.parentElement.parentElement.querySelector('.price')
        let money = price.textContent
        money = Number(money.split('.')[1])
        e.target.parentElement.parentElement.classList.add('remove')
        totalPrice = totalPrice - money
        document.querySelector('.t-price').textContent = totalPrice
    })
})
