<template>
  
<section class="shop">
  <h1 class='main-eshop-title'>E-commerce page</h1>
  <div class='article-container'>
    <div class='left-container'>
      <div class="item-name">
        <page-item-name :product="product"/>
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
          <page-item :product="product"/>
        </div>
      </div>
    </div>
    <div class='right-container'>
      <div class="cart tag-50">
        <h3>Cart</h3>
        <cart-item :items="items"/>
        <div class="total-price">
          <span>Total:</span>
          <grand-total :items="items"/>
          <button class="button green-500 buy-button">Buy</button>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>

let pageItemName = {
    props: ['product', 'items'],
    name: 'PageItemName',
    template: `<h2>{{ product.name }}</h2>`
}

let pageItem = {
    props: ['product'],
    methods: {
        removeQuantity: function() {
            if(this.product.quantity > 1 ) {
                this.product.quantity--;
            }
        },
        addQuantity: function() {
            this.product.quantity++;
        },
        addToCart(itemToAdd) {
            var found = false;
            this.items.forEach(item => {
                if (product.id === itemToAdd.id) {
                    found = true;
                    product.qty += itemToAdd.qty;
                }
            });
            if (found === false) {
                this.items.push(Vue.util.extend({}, itemToAdd));
            }
			itemToAdd.qty = 1;
        }
    },
    template: `<div class="grouped">
                <button class="sm-button red-500" @click="removeQuantity"> - </button>
                <span :product.quantity="product.quantity">{{ product.quantity }}</span>
                <button class="sm-button green-500" @click="addQuantity"> + </button>
                <span class="price">{{ product.quantity * product.price }} {{ product.currency }}</span>
                <button class="button blue-500 cart-button" :items="items" @click="addToCart">Add to Cart</button>
               </div>`
}

let cartItem = {
    props: ['items'],
    methods: {
        removeCartQuantity: function(index) {
            if(this.item.quantity > 1 ) {
                this.item[index].quantity -= 1;
            }
        },
        addCartQuantity: function(index) {
            this.item[index].quantity += 1;
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
                                {{ item.quantity * item.price }} {{ item.currency }}
                            </div>
                        </div>
                    </li>
                </ul>
               </div>`
}

let grandTotal = {
    props: ['items'],
    data () {
      return {
          currency: '€'
      }  
    },
    computed: {
        cartGrandTotal: function() {
            let total = 0
            this.items.forEach ((item) => {
                total += (item.price * item.quantity)
            });
        return total;
        }
    },
    template:`<span class="grand-total">{{ cartGrandTotal }} {{ currency }}</span>`
}

export default {
  name: 'Shop',
  data () {
      return {
        product : { id: 1, name: 'TagCommander', quantity: 0, price: 20, currency: '€' },
        items: [
            { id: 2, name: 'TagCommanderBis', quantity: 2, price: 90, currency: '€' },
            { id: 3, name: 'TagCommanderTer', quantity: 5, price: 40, currency: '€' }
        ]
      }
  },
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
