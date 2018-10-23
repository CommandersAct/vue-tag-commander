<template>
  
<section class="shop">
  <h1 class='main-eshop-title'>E-commerce page</h1>
  <div class='article-container'>
    <div class='left-container'>
      <div class="item-name">
        <page-item-name/>
      </div>
      <div class="image-container">
        <img src="../assets/Tag-Commander.png"/>
      </div>
      <div class=product-information>
        <h5>Product Information</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h5>Quantity</h5>
        <div class="quantity-handler-container">
          <page-item/>
        </div>
      </div>
    </div>
    <div class='right-container'>
      <div class="cart tag-50">
        <h3>Cart</h3>
        <cart-item/>
        <div class="total-price">
          <span>Total:</span>
          <grand-total/>
          <button class="button green-500 buy-button">Buy</button>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>

let pageItemName = {
    data () {
        return {
            name: 'TagCommander'
        }
    },
    template: `<h2 :name="name">{{ name }}</h2>`
}

let pageItem = {
    data () {
        return {
            id: 1,
            name: 'TagCommander',
            quantity: 0,
            price: 20,
            defaultStoreCurrency: '€'
        }
    },
    methods: {
        removeQuantity: function() {
            if(this.quantity > 1 ) {
                this.quantity --
            }
        },
        addQuantity: function() {
            this.quantity ++
        }
    },
    template: `<div class="grouped">
                <button class="sm-button red-500" @click="removeQuantity"> - </button>
                <span :quantity="quantity">{{ quantity }}</span>
                <button class="sm-button green-500" @click="addQuantity"> + </button>
                <span class="price">{{ quantity * price }} {{ defaultStoreCurrency }}</span>
                <button class="button blue-500 cart-button">Add to Cart</button>
               </div>`
}

let cartItem = {
    data() {
        return {
            items: [
                { id: 2, name: 'TagCommanderBis', quantity: 2, price: 90, defaultStoreCurrency: '€' },
                { id: 3, name: 'TagCommanderTer', quantity: 5, price: 40, defaultStoreCurrency: '€' }
            ]
        } 
    },
    methods: {
        removeCartQuantity: function() {
            if(this.item.quantity > 1 ) {
                this.item.quantity --
            }
        },
        addCartQuantity: function() {
            this.item.quantity ++
        }
    },
    template: `<div>
                <ul>
                    <li v-for="item in items">
                        <h5>{{ item.name }}</h5>
                        <div class="cart-quantity">
                            <div class="grouped cart-group">
                                <button class="sm-button red-500" @click="removeCartQuantity"> - </button>
                                <span :item.quantity="item.quantity">{{ item.quantity }}</span>
                                <button class="sm-button green-500" @click="addCartQuantity"> + </button>
                            </div>
                            <div class="cart-item-price">
                                {{ item.quantity * item.price }} {{ item.defaultStoreCurrency }}
                            </div>
                        </div>
                    </li>
                </ul>
               </div>`
}

let grandTotal = {
    data() {
        return {
            total: 0,
            defaultStoreCurrency: '€'
        }
    },
    template:`<span class="grand-total">{{ total }} {{ defaultStoreCurrency }}</span>`
}

export default {
  name: 'Shop',
  components: {
      pageItemName,
      pageItem,
      cartItem,
      grandTotal
  }
}

</script>

<style lang="scss">

</style>
