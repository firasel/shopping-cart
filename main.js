//plus button functionality
function quantityButtons(btnId,quantityId) {
    var quantity
    var price
    const subTotal = document.getElementById('subTotal')
    const total = document.getElementById('total')
    const tax = document.getElementById('tax')
    if(quantityId=='phone'){
        quantity=document.getElementById(quantityId+'QuantityInput')
        price=document.getElementById(quantityId+'PriceShow')
    }else{
        quantity=document.getElementById(quantityId+'QuantityInput')
        price=document.getElementById(quantityId+'PriceShow')
    }
    calculatePrice(btnId, quantity, price, subTotal, total,tax)
}


//quantity and price calculate
function calculatePrice(btnId, quantity, price, subTotal, total,tax) {
    document.getElementById(btnId).addEventListener('click', function () {
        var currentQuantity = parseInt(quantity.value)
        var updateQuantity
        var fixedPrice
        var updatePrice
        var currentSubTotal
        var updateSubtotal
        var updateTax
        var updateTotal
        if (btnId == 'phonePlusBtn' || btnId == 'casingPlusBtn') {
            //quantity calculate
            updateQuantity = ++currentQuantity
            //product price calculate
            fixedPrice = (parseFloat(price.innerText) / (--currentQuantity))
            updatePrice = fixedPrice * updateQuantity
            //subtotal calculate
            currentSubTotal = parseFloat(subTotal.innerText)
            updateSubtotal = currentSubTotal + fixedPrice
            updateTax=parseFloat((updateSubtotal*0.1).toFixed(2))
            updateTotal=updateSubtotal+updateTax
        } else {
            if (quantity.value > 1) {
                //quantity calculate
                updateQuantity = --currentQuantity
                //product price calculate
                fixedPrice = (parseFloat(price.innerText) / (++currentQuantity))
                updatePrice = fixedPrice * updateQuantity
                //subtotal calculate
                currentSubTotal = parseFloat(subTotal.innerText)
                updateSubtotal = currentSubTotal - fixedPrice
                updateTax=parseFloat((updateSubtotal*0.1).toFixed(2))
                updateTotal=updateSubtotal+updateTax
            }
        }
        //check any change then update
        if (updateQuantity > 0) {
            //quantity update
            quantity.value = updateQuantity
            //update price
            price.textContent = updatePrice
            //update subtotal
            subTotal.textContent = updateSubtotal
            //update tax
            tax.textContent=updateTax
            //update total
            total.textContent = updateTotal
        }else{
            alert('quantity is not possible zero')
        }
    })
}
quantityButtons('phonePlusBtn', 'phone')
quantityButtons('casingPlusBtn', 'casing')
quantityButtons('phoneMinusBtn', 'phone')
quantityButtons('casingMinusBtn', 'casing')


//remove button functionality
function removeButton(btnId, areaId) {
    const removeBtn = document.getElementById(btnId)
    const area = document.getElementById(areaId)
    const subTotal = document.getElementById('subTotal')
    const tax = document.getElementById('tax')
    const total = document.getElementById('total')
    removeBtn.addEventListener('click', function (events) {
        var minusPrice = parseFloat(events.target.previousElementSibling.firstElementChild.innerText)
        //subtotal calculate
        var currentSubTotal = parseFloat(subTotal.innerText)
        var updateSubtotal = currentSubTotal - minusPrice
        subTotal.textContent = updateSubtotal
        //tax calculate
        var oldTax=parseFloat(tax.innerText)
        var updateTax=parseFloat((updateSubtotal*0.1).toFixed(2))
        tax.textContent=updateTax
        //total calculate
        total.textContent = updateSubtotal+updateTax
        //remove this element
        area.remove();
    })
}
removeButton('phoneRmvBtn', 'phoneArea')
removeButton('casingRmvBtn', 'casingArea')