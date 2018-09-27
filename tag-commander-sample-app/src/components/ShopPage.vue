<template> 
  <div class='shop'>
    <h1 class='main-eshop-title'>E-commerce page</h1>
    <div class='article-container'>
      <div class='left-container'>
        <div class="item-name">
            <pageItemName/>
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
                <div class="grouped">        
                </div>
            </div>
        </div>
      </div>
      <div class='right-container'>
      </div>
    </div>
  </div>
</template>

<script>
class Item {
    constructor(id, name, price, quantity) {
        this.id;
        this.name;
        this.price;
        this.quantity;
    };
}

let pageItem = new Item ({
    props: {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
    }
})

let cartItem = new Item ({
    props: {
        id: String,
        name: String,
        price: Number,
        quantity: Number
    }
})

let pageItemName = {
    components: {
        pageItem
    },
    data () {
        return {
            name: 'TagCommander'
        }
    },
    template: '<h2 :name="name">{{ name }}</h2>'
}

export default {
  name: 'Shop',
  components: {
      pageItemName
  }
}

</script>

<style scoped lang="scss">
  @import '../../styles';

  h1.main-eshop-title {
    text-align: center;
    color: $tag-commander-purple;
  }
  div.msg-card-displayed {
    position: fixed;
    padding: 20px 0;
    margin: -20px 0 0 -20px;
    background-color: $green-500;
    opacity: 0.7;
    color: #fff;
    text-align: center;
    width: 1064px;
  }
  div.msg-card-not-displayed{
    display: none;
  }
  div.article-container {
    display: inline-flex; 
    .item-name{
      margin-bottom: 5px;
    }
    .left-container {
        padding: 20px;
        .quantity-handler-container {
            font-size: 22px;
            display: flex;
            line-height: 45px;
            margin-bottom: 20px;
            .price {
                padding-left: 20px; 
            }
            .cart-button {
                margin: 0 100px;
            }
        }
    }
    .right-container {
        padding: 20px;
        div.cart {
            width: 300px;
            border-radius: 5px;
            padding: 10px;
            background: #f1f2f3;
            h3{
              margin-top: 0px;
              margin-bottom: 0px;
            }
            ul {
                list-style: none;
                padding: 0 0px;
                li {
                    padding: 0;
                    h5 {
                        margin-bottom: 5px;
                    }
                    div.cart-quantity {
                        font-size: 22px;
                        padding: 5px 0;
                        display: flex;
                        line-height: 36px;
                        div.cart-item-price {
                            text-align: right;
                            width: 190px;
                        }
                    }
                }
            }
            .total-price {
                padding-top: 30px;
                font-size: 26px;
                font-weight: bold;
                .grand-total {
                    float: right;
                }
                .buy-button {
                    width: 100%;
                    margin-top: 20px;
                }
            }
        }
    }
  }
</style>