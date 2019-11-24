function Basket() {
	this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(product, price) {
    this.products.push({
        product,
        price,
    });

    this.sum += price;
}

Basket.prototype.showBasket = function() {
    this.products.forEach((el) => {
        console.log(el.product, el.price);
    })

    console.log('Suma do zaplacenia', this.sum);
}