

import React, { useState, useEffect } from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Correct cost calculation using reduce instead of map
    const cost = cartItems.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems]);

    const handleRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", {
            position: "bottom-right"
        });
        dispatch(removeFromCart(id));
    };

    return (
        <div className="cart">

            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="desellectAllCart">Deselect all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    {cartItems.map((item, ind) => (
                        <div className='cartItemBlock' key={item.id || ind}>
                            <div className='cartItemLeftBlock'>
                                <img className='cartItemLeftBlockImage' src={item.imageUrl} alt={item.name} />
                            </div>
                            <div className='cartItemLeftBlockDetails'>
                                <div className='cartItemProductName'>{item.name}</div>
                                <div className='inStockCart'> In stock</div>
                                <div className='elgFreeShp'> Eligible for FREE shipping </div>
                                <div className='amazonFullFilledImage'> </div>
                                <div className='removeFromCart' onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove From Basket
                                </div>
                            </div>
                            <div className='cartItemRightBlock'>
                                Rs {item.price}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">
                    Subtotal ({cartItem.length} items) : 
                    <span className='subTotalTitleSpan'>Rs {cost}</span>
                </div>
                <div className="giftAddto">
                    <input type='checkbox' />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Cart;
