

import React, { useState, useEffect } from "react";
import './homeBanner.css';
import logo1 from "../../../../../Assets/logo1.jpg";
import logo2 from "../../../../../Assets/logo2.jpg";
import logo3 from "../../../../../Assets/logo3.jpg";
import logo4 from "../../../../../Assets/logo4.jpg";
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
    const images = [logo1, logo2, logo3, logo4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    const navigate = useNavigate();  // Hook to programmatically navigate
      
    const handleButtonClick = () => {
      navigate('/Men"s collection');  // Navigate to the Cart page
    };

    const handleButtonClick1 = () => {
        navigate('/women"s collection');  // Navigate to the Cart page
      };

      const handleButtonClick2 = () => {
        navigate('/products');  // Navigate to the Cart page
      };


    return (
        <div className="homeBanner">
            <img
                className="homebannerimg"
                src={images[currentImageIndex]}
                alt="banner"
            />

           


            <div className="homeBannerContainer">

            <div className="homeBannerItems3">
            <div className="homebanneritemvCard group relative">
                {/* Image Section */}
                <div className="imgBannerHomeDiv">
                    <img
                        className="imgBannerHomeDivimg group-hover:opacity-50"
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/t/i/-original-imahfxuyehedukzm.jpeg?q=70"
                        alt="Banner Item"
                    />
                </div>

                {/* Title Section */}
                <div className="homeBannerItemDivCardTitle">
                    Title
                </div>

                {/* Hidden Content that Appears on Hover */}
                <div className="overlay">
                    <div className="p-4 text-center">
                        <p className="text-lg text-white">Explore us to get more...</p>
                        <button 
                        onClick={handleButtonClick}
                        className="px-4 py-2 text-sm text-white bg-green-600">
                            Visit site
                        </button>
                    </div>
                </div>
            </div>
            </div>

        <div className="homeBannerItems1">
            <div className="homebanneritemvCard group relative">
                {/* Image Section */}
                <div className="imgBannerHomeDiv">
                    <img
                        className="imgBannerHomeDivimg group-hover:opacity-50"
                        src="https://rukminim2.flixcart.com/image/612/612/khxqt8w0/top/h/x/f/s-ss20an083tc108-and-original-imafxrzgnxgayphu.jpeg?q=70"
                        alt="Banner Item"
                    />
                </div>

                {/* Title Section */}
                <div className="homeBannerItemDivCardTitle">
                    Title
                </div>

                {/* Hidden Content that Appears on Hover */}
                <div className="overlay">
                    <div className="p-4 text-center">
                        <p className="text-lg text-white">Explore us to get more...</p>
                        <button 
                        onClick={handleButtonClick1}
                        className="px-4 py-2 text-sm text-white bg-green-600">
                            Visit site
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="homeBannerItems2">
            <div className="homebanneritemvCard group relative">
                {/* Image Section */}
                <div className="imgBannerHomeDiv">
                    <img
                        className="imgBannerHomeDivimg group-hover:opacity-50"
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/7/s/o/7-8-years-tpk-fashionmart-original-imah4zdwxqnhxgfp.jpeg?q=70"
                        alt="Banner Item"
                    />
                </div>

                {/* Title Section */}
                <div className="homeBannerItemDivCardTitle">
                    Title
                </div>

                {/* Hidden Content that Appears on Hover */}
                <div className="overlay">
                    <div className="p-4 text-center">
                        <p className="text-lg text-white">Explore us to get more...</p>
                        <button 
                        onClick={handleButtonClick2}
                        className="px-4 py-2 text-sm text-white bg-green-600">
                            Visit site
                        </button>
                    </div>
                </div>
            </div>
        </div>



        <div className="homeBannerItems3">
            <div className="homebanneritemvCard group relative">
                {/* Image Section */}
                <div className="imgBannerHomeDiv">
                    <img
                        className="imgBannerHomeDivimg group-hover:opacity-50"
                        src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/d/n/y/3-dv116-3-divastri-black-original-imah44m6x7uyusvv.jpeg?q=70"
                        alt="Banner Item"
                    />
                </div>

                {/* Title Section */}
                <div className="homeBannerItemDivCardTitle">
                    Title
                </div>

                {/* Hidden Content that Appears on Hover */}
                <div className="overlay">
                    <div className="p-4 text-center">
                        <p className="text-lg text-white">Explore us to get more...</p>
                        <button onClick={handleButtonClick}
                        className="px-4 py-2 text-sm text-white bg-green-600">
                            Visit site
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </div>
    );
};

export default HomeBanner;
