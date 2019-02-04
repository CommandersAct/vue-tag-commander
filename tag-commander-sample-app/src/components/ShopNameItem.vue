<template>
<div>
    <h2>{{ product.name }}</h2>
</div>
</template>


<script>

export class Item {
    constructor(id, name, price, quantity, currency) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.currency = currency;
    }
}

export default {
    name:'ShopNameItem',
    props: ['product']
}

</script>
