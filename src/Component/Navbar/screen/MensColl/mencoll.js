import React from "react"
import './mencoll.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from './mencoll.json';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Mencoll = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (item) => {
        toast.success("successfully added to cart!!!");
        dispatch(addToCart(item));
    }
    return (



<div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                   Men's Clothing
                </div>
                <div className="productTopBannerItemsSubMenu">T-Shirts & Tops</div>
                <div className="productTopBannerItemsSubMenu">Dresses & Gowns</div>
                <div className="productTopBannerItemsSubMenu">Shorts & Skirts</div>
                <div className="productTopBannerItemsSubMenu">Nightwear</div>
                <div className="productTopBannerItemsSubMenu">Ethnic Wear</div>
                <div className="productTopBannerItemsSubMenu">Sale/Offers</div>
                <div className="productTopBannerItemsSubMenu">New Arrivals</div>
                <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
            </div>

            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        {/* <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div> */}
                        <div className="productsPageMainLeftCategoryContentSub">Cloths</div>
                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Mytalorzone Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    </div>
                </div>

                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">
                        1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Men's collection</span>
                    </div>

                    <div className="itemsImageProductPage">


                        {
                            productDetail.product.map((item, index) =>{
                                return(

                          <div className="itemsImageProductPageone" key={item.idd}>
                          <div className="imgBlockitemsImageProductPageone">

                              <img src={item.imageUrl} className='productimageproduct' />


                          </div>

                          <div className="productNameProduc">
                          <div>
                              {item.name }
                          </div>
                          <div className="productNameProductRating">
                              <StarRateIcon sx={{ fontSize: "16px" , color: "#febd69"}} />
                              <StarRateIcon sx={{ fontSize: "16px" , color: "#febd69"}} />
                              <StarRateIcon sx={{ fontSize: "16px" , color: "#febd69"}} />
                              <StarRateIcon sx={{ fontSize: "16px" , color: "#febd69"}} />
                              <StarOutlineIcon sx={{ fontSize: "16px" , color: "#febd69"}} />

                          </div>
                          <div className="priceProductDetailPage">
                              <div className="currencyText">₹</div>
                              <div className="rateHomeDetail">
                                  <div className="">{item.price}</div>
                                  <div className="addtobasketBtn" onClick={() => {handleAddToCart(item)}}>Add To Cart</div>
                              </div>

                          </div>
                          <div className="offProductPage">Upto 10% off on Select cards</div>
                          <div className="freeDeliveryHomepage">Free Delivery By Mytalorzone </div>

                        </div>
                        </div>

                                );
                            })



                        }
                         
                    </div>
                    </div>
                    </div>
                    <ToastContainer />
                    </div>
        
    )
}

export default Mencoll;