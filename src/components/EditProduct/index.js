import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProductAction } from '../../actions/products-actions'
import { useHistory } from 'react-router-dom'

const EditProduct = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    name: '',
    price: ''
  })

  const productEdit = useSelector(state => state.products.editProduct)

  // fill state
  useEffect(() => {
    setProduct(productEdit)
  }, [productEdit])


  const submitEditProduct = event => {
    event.preventDefault()
    dispatch(editProductAction(product))
    history.push('/')
  }

  // read data from form
  const onChangeForm = event => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div>
      <form
        onSubmit={submitEditProduct}
      >
        <h1>Edit product</h1>
        <section>
          <label>Product name</label>
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={onChangeForm}
          />
        </section>
        <section>
          <label>Product price</label>
          <input
            type='number'
            name='price'
            min='0'
            value={product.price}
            onChange={onChangeForm}
          />
        </section>
        <button>Save changes</button>
      </form>
    </div>
  )
}

export default EditProduct