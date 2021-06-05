let menu = prompt('1. Coffee-100AMD\n 2. Tea-150AMD \n 3.Milk-200AMD \n 4.Nescaffe-300AMD \n 5.Water-50AMD')
let prices = {
    coffee: 100,
    tea: 150,
    milk: 200,
    nescaffe: 300,
    water: 50,
};
function validateAmount (amount, itemPrice, itemType) {
    if(Number(amount) < itemPrice) {
        alert(`The amount is less than the price of ${itemType}`);
        } else if (Number(amount) > itemPrice) {
            alert(`Please take your change: ${Number(amount) - itemPrice}`);
            alert(`Your ${itemType} is ready`);
        } else {
            alert(`Your ${itemType} is ready`);
        }
}
if(Number(menu)=== 1) {
    const enteredPrice = prompt('You have chosen coffee, please insert 100 AMD')
    validateAmount(enteredPrice, prices.coffee, 'Coffee')
    } 
else if(Number(menu) === 2) {
    const enteredPrice = prompt('You have chosen tea, please insert 150 AMD')
    validateAmount(enteredPrice, prices.tea, 'Tea')
}else if(Number(menu) === 3) {
    const enteredPrice = prompt('You have chosen milk, please insert 200 AMD')
    validateAmount(enteredPrice, prices.milk, 'Milk')
}else if(Number(menu) === 4) {
    const enteredPrice =prompt('You have chosen nescaffe, please insert 300 AMD')
    validateAmount(enteredPrice, prices.nescaffe, 'Nescaffe')
}else if(Number(menu) === 5) {
    const enteredPrice = prompt('You have chosen water, please insert 50 AMD')
    validateAmount(enteredPrice, prices.water, 'Water')
} else {
    alert('There is no such item, please try again');
}
