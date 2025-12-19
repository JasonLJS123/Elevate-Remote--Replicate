import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Storage = cartItems => {
    localStorage.setItem(
        'cart',
        JSON.stringify(cartItems.length > 0 ? cartItems : [])
    )
}

const useCart = () => {
    const [cart, setCart] = useContext(CartContext)

    const [token, setToken] = useState([])

    useEffect(() => {
        let token = window.localStorage.getItem('token')
        setToken(token || '')
        // console.log("CURRENT TOKEN", token);
    }, [])

    function getCart() {
        // calculateCart();
        if (cart == null || cart == undefined) {
            setCart([])
            return []
        }
        return cart
    }

    function clearCart() {
        setCart([])
        Storage([])
    }

    function addProduct(item) {
        // console.log(cart, item)
        let cartTemp = [...cart]

        let newItem = { ...item }
        let foundIndex = cartTemp.findIndex(
            cartItem => cartItem.product_id === newItem.product_id
        )

        if (foundIndex !== -1) {
            //   console.log('Product exists in cart')

            const existingItem = cartTemp[foundIndex]
            const potentialNewQuantity = existingItem.quantity + newItem.quantity

            if (potentialNewQuantity <= newItem.stock_balance) {
                // console.log('Updating quantity in cart')
                cartTemp[foundIndex].quantity = potentialNewQuantity
                cartTemp[foundIndex].totalPrice = parseFloat(
                    getPriceByQuantity(existingItem, potentialNewQuantity)
                ).toFixed(2)
            } else {
                // console.log('Cannot add more to cart: Exceeds stock availability')
                return false
            }
        } else {
            if (newItem.quantity <= newItem.stock_balance) {
                // console.log('Adding new product to cart')
                newItem.totalPrice = parseFloat(
                    getPriceByQuantity(newItem, newItem.quantity)
                ).toFixed(2)
                newItem.index = cartTemp.length
                cartTemp.push(newItem)
            } else {
                // console.log(
                //   'Cannot add product to cart: Initial quantity exceeds stock balance'
                // )
                return false
            }
        }
        setCart(cartTemp)
        Storage(cartTemp)
    }

    function getPriceByQuantity(item, quantity) {
        if (item.has_discount && item.discount_price) {
            return quantity * parseFloat(item.discount_price)
        } else {
            return quantity * parseFloat(item.unit_price)
        }
    }

    function increaseQuantity(productId) {
        let isUpdated = false
        const updatedCart = cart.map(item => {
            if (item.product_id === productId) {
                if (item.quantity + 1 <= item.stock_balance) {
                    const newQuantity = item.quantity + 1
                    item.quantity = newQuantity
                    item.totalPrice = parseFloat(
                        getPriceByQuantity(item, newQuantity)
                    ).toFixed(2)
                    isUpdated = true
                }
            }
            return item
        })

        if (isUpdated) {
            setCart(updatedCart)
            Storage(updatedCart)
        }
        return isUpdated
    }

    function decreaseQuantity(productId) {
        const updatedCart = cart.reduce((newCart, item) => {
            if (item.product_id === productId) {
                const newQuantity = item.quantity - 1
                if (newQuantity > 0) {
                    newCart.push({
                        ...item,
                        quantity: newQuantity,
                        totalPrice: parseFloat(
                            getPriceByQuantity(item, newQuantity)
                        ).toFixed(2)
                    })
                }
            } else {
                newCart.push(item)
            }
            return newCart
        }, [])

        setCart(updatedCart)
        Storage(updatedCart)
    }

    function removeProduct(productId) {
        const updatedCart = cart.filter(item => item.product_id !== productId)

        setCart(updatedCart)
        Storage(updatedCart)
    }

    function getTotalFromCart() {
        const total = cart.reduce((acc, item) => {
            return acc + parseFloat(item.totalPrice)
        }, 0)

        return total.toFixed(2)
    }

    function fetchStockForItem(productId) {
        // Mock function to simulate fetching stock for a product
        // Replace this with actual logic to fetch stock from your data source
        return products.find(product => product.product_id === productId)
            .stock_balance
    }

    return {
        clearCart,
        getCart,
        addProduct,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        getTotalFromCart
    }
}

export default useCart
