import swell from 'swell-js'

export async function getCart() {
  const cart = await swell.cart.get()
  return cart
}