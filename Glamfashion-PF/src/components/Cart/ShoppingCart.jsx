import React from 'react'
import { useCart } from '../../context/CartContext'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'

export default function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart, total } = useCart()
  const { API, authToken } = useContext(AuthContext)

  if (cartItems.length === 0) {
    return <p>Tu carrito está vacío.</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Tu carrito</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item._id)}
              className="ml-4 text-red-500"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <hr className="my-4"/>
      <p className="text-lg">Total: <strong>${total.toFixed(2)}</strong></p>

      <div className="mt-6">
        <PayPalScriptProvider options={{ "client-id": "<TU_PAYPAL_CLIENT_ID>" }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return fetch(`${API}/payment/create-payment`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  ...(authToken && { Authorization: `Bearer ${authToken}` })
                },
                body: JSON.stringify({ amount: total.toFixed(2) })
              })
              .then(res => res.json())
              .then(data => data.id)
            }}
            onApprove={(data, actions) => {
              return fetch(`${API}/payment/capture-payment`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  ...(authToken && { Authorization: `Bearer ${authToken}` })
                },
                body: JSON.stringify({ orderID: data.orderID })
              })
              .then(res => res.json())
              .then(captureData => {
                if (captureData.status === 'COMPLETED') {
                  toast.success('Pago completado con éxito')
                  clearCart()
                } else {
                  toast.error('Hubo un problema al capturar el pago')
                }
              })
            }}
            onError={err => {
              console.error(err)
              toast.error('Error en el proceso de pago')
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}
