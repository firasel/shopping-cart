//plus button functionality
function plusButton(btnId, quantityId, priceShow, subTotalId, totalId) {
    const btn = document.getElementById(btnId)
    const quantity = document.getElementById(quantityId)
    const price = document.getElementById(priceShow)
    const subTotal = document.getElementById(subTotalId)
    const total = document.getElementById(totalId)
    btn.addEventListener('click', function () {
        //quantity calculate
        var currentQuantity = parseInt(quantity.value)
        var updateQuantity = ++currentQuantity
        quantity.value = updateQuantity
        //price calculate
        var fixedPrice = (parseFloat(price.innerText) / (--currentQuantity))
        var updatePrice = fixedPrice * updateQuantity
        price.textContent = updatePrice
        //subtotal calculate
        var currentSubTotal = parseFloat(subTotal.innerText)
        var updateSubtotal = currentSubTotal + fixedPrice
        subTotal.textContent = updateSubtotal
        //total calculate
        total.textContent = updateSubtotal
    })
}
plusButton('phonePlusBtn', 'phoneQuantityInput', 'phonePriceShow', 'subTotal', 'total')
plusButton('casingPlusBtn', 'casingQuantityInput', 'casingPriceShow', 'subTotal', 'total')
//minus button functionality
function minusButton(btnId, quantityId, priceShow, subTotalId, totalId) {
    const btn = document.getElementById(btnId)
    const quantity = document.getElementById(quantityId)
    const price = document.getElementById(priceShow)
    const subTotal = document.getElementById(subTotalId)
    const total = document.getElementById(totalId)
    btn.addEventListener('click', function () {
        if (quantity.value > 1) {
            //quantity calculate
            var currentQuantity = parseInt(quantity.value)
            var updateQuantity = --currentQuantity
            quantity.value = updateQuantity
            //price calculate
            var fixedPrice = (parseFloat(price.innerText) / (++currentQuantity))
            price.textContent = (updateQuantity * fixedPrice)
            //subtotal calculate
            var currentSubTotal = parseFloat(subTotal.innerText)
            var updateSubtotal = currentSubTotal - fixedPrice
            subTotal.textContent = updateSubtotal
            //total calculate
            total.textContent = updateSubtotal
        }
    })
}
minusButton('phoneMinusBtn', 'phoneQuantityInput', 'phonePriceShow', 'subTotal', 'total')
minusButton('casingMinusBtn', 'casingQuantityInput', 'casingPriceShow', 'subTotal', 'total')
//remove button functionality
function removeButton(btnId, areaId, subTotalId, totalId) {
    const removeBtn = document.getElementById(btnId)
    const area = document.getElementById(areaId)
    const subTotal = document.getElementById(subTotalId)
    const total = document.getElementById(totalId)
    removeBtn.addEventListener('click', function (events) {
        var minusPrice = parseFloat(events.target.previousElementSibling.firstElementChild.innerText)
        //subtotal calculate
        var currentSubTotal = parseFloat(subTotal.innerText)
        var updateSubtotal = currentSubTotal - minusPrice
        subTotal.textContent = updateSubtotal
        //total calculate
        total.textContent = updateSubtotal
        area.remove();
    })
}
removeButton('phoneRmvBtn', 'phoneArea', 'subTotal', 'total')
removeButton('casingRmvBtn', 'casingArea', 'subTotal', 'total')