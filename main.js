//plus button functionality
function quantityButtons(btnId,quantityId) {
    var quantity
    var price
    const subTotal = document.getElementById('subTotal')
    const total = document.getElementById('total')
    if(quantityId=='phone'){
        quantity=document.getElementById(quantityId+'QuantityInput')
        price=document.getElementById(quantityId+'PriceShow')
    }else{
        quantity=document.getElementById(quantityId+'QuantityInput')
        price=document.getElementById(quantityId+'PriceShow')
    }
    calculatePrice(btnId, quantity, price, subTotal, total)
}


//quantity and price calculate
function calculatePrice(btnId, quantity, price, subTotal, total) {
    document.getElementById(btnId).addEventListener('click', function () {
        var currentQuantity = parseInt(quantity.value)
        var updateQuantity
        var fixedPrice
        var updatePrice
        var currentSubTotal
        var updateSubtotal
        if (btnId == 'phonePlusBtn' || btnId == 'casingPlusBtn') {
            //quantity calculate
            updateQuantity = ++currentQuantity
            //product price calculate
            fixedPrice = (parseFloat(price.innerText) / (--currentQuantity))
            updatePrice = fixedPrice * updateQuantity
            //subtotal calculate
            currentSubTotal = parseFloat(subTotal.innerText)
            updateSubtotal = currentSubTotal + fixedPrice
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
            //update total
            total.textContent = updateSubtotal
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