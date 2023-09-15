let getDiscount = (price, discount) => {
    return price - (price * discount) /100;
}

console.log(getDiscount(100,10))