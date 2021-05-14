const methods = document.querySelectorAll('input[type=radio]')
html = ''
methods.forEach(method => {
    method.addEventListener('click', (e) => {
        console.log(e.target.value);

        if(e.target.value === 'credit'){
            html = `
            <form>
                <input type="text" placeholder="Name on Card">
                <input type="text" placeholder="card Number">
                <div class="group">
                    <input type="text" name="expiry-month" placeholder="expiry month">
                    <input type="text" name="expiry-year" placeholder="expiry year">
                    <input type="text" name="security" id="" placeholder="CVV">
                </div>
            </form>
            `
        } else if(e.target.value === 'upi'){
            html = `
            <form>
                <input type="text" placeholder="Enter UPI Id">
            </form>
            `

        } else if(e.target.value === 'paytm') {
            html = `
            <form>
                <input type="text" placeholder="Enter paytm UPI Id">
            </form>
            `
        }
        document.querySelector('.method').innerHTML = html
    })

    
})
console.log(html)