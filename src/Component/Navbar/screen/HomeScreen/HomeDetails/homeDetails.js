


import React, { useRef } from "react";
import './homeDetails.css';

const HomeDetails = () => {
    const scrollRef1 = useRef(null); // Ref for the first scrollable container
    const scrollRef2 = useRef(null); // Ref for the second scrollable container

    const scrollRight = () => {
        if (scrollRef1.current) {
            scrollRef1.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        if (scrollRef1.current) {
            scrollRef1.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight12 = () => {
        if (scrollRef2.current) {
            scrollRef2.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    const scrollLeft12 = () => {
        if (scrollRef2.current) {
            scrollRef2.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const items = [
        { id: 1, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/z/0/n/32-a5499-0006pink-levi-s-original-imagm5n8yb9e9zkf.jpeg?q=70', discount: 'Up to 20% off', deal: 'Limited Time Deal' },
        { id: 2, image: 'https://rukminim2.flixcart.com/image/612/612/l2dmky80/jacket/u/q/p/xs-1-no-84932899-puma-original-imagdqbnzrhnhcec.jpeg?q=70', discount: 'Up to 30% off', deal: 'Special Offer' },
        { id: 3, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/a/m/x/s-1-no-bftbw4003sblkpur-boldfit-clothing-original-imah5wsdxpbdzvdt.jpeg?q=70', discount: 'Flat 50% off', deal: 'Limited Stock' },
        { id: 4, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/l/p/w/4-5-years-no-vm-1549495-400-v-mart-original-imah5yfaa4bzq8e3.jpeg?q=70', discount: 'Up to 40% off', deal: 'Hot Deal' },
        { id: 5, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/8/j/5/4-5-years-no-oc-balt-gudiya-modle-official-club-original-imah78kzmtrwgyuu.jpeg?q=70', discount: 'Up to 50% off', deal: 'Trending' },
        { id: 6, image: 'https://rukminim2.flixcart.com/image/612/612/kwdv3bk0/headphone/s/b/z/-original-imag92pgvvnbk3ys.jpeg?q=70', discount: 'Up to 10% off', deal: 'Flash Deal' },
        { id: 7, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70', discount: 'Up to 15% off', deal: 'Limited Stock' },

        { id: 8, image: 'https://rukminim2.flixcart.com/image/612/612/kwmfqfk0/watch/q/h/k/1-es4782-fossil-women-original-imag998fzzpknane.jpeg?q=70', discount: 'Up to 50% off', deal: 'Limited Stock' },
        { id: 9, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/v/h/xxl-80kbd899-samah-original-imahfs23c9xsp8ky.jpeg?q=70', discount: 'Up to 30% off', deal: 'Hot Deal' },
        { id: 10, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/n/t/8/3c-ayk-102-aerokick-original-imah6xzf6eun75qp.jpeg?q=70', discount: 'Up to 10% off', deal: 'Flash Deal' },
    ];

    const items1 = [
        { id: 1, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/jacket/n/5/5/xxl-no-688745-puma-original-imah5tnbzrcgpyf4.jpeg?q=70', discount: '55-80% off', deal: 'PUMA Killer...' },
        { id: 2, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/u/z/b/xxl-208kbd2204i-skylee-original-imah7ffdzfcu3u2f.jpeg?q=70', discount: 'Min.70% off', deal: 'Kurta Sets' },
        { id: 3, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/thermal/q/n/e/s-1-cott-lad-black-top-fsv-1pc-lux-cottswool-original-imah6k5gs8ffhhum.jpeg?q=70', discount: 'Under ₹ 499', deal: 'FortCollins, Wildraft& More...' },
        { id: 4, image: 'https://rukminim2.flixcart.com/fk-p-flap/400/400/image/b39be78353fcfc59.jpg?q=70', discount: 'Min. 70% off', deal: 'Reebok, HRX...' },
        { id: 5, image: 'https://rukminim2.flixcart.com/fk-p-flap/400/400/image/6217dc2f262edc3e.jpg?q=70', discount: 'Up to 50% off', deal: 'Trending' },
        { id: 6, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/suitcase/2/o/g/-original-imah2c4fscc7vhzm.jpeg?q=70', discount: 'Up to 70% off', deal: 'Safari,Aristocrat & More' },
        { id: 7, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/jewellery-set/3/c/n/na-na-3-ad-696-ir-gn-nker-estele-original-imagvjmhmbndy2af.jpeg?q=70', discount: 'Under ₹299', deal: 'Jewellery Sets' },

        { id: 8, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/shoe/t/e/u/3-739-rowlans-pink-original-imagsn2s7yzguttn.jpeg?q=70', discount: 'Up to 70% off', deal: 'Women Shoes' },
        { id: 9, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/z/h/x/4xl-no-mt2-jkt-hood-windc-gone-white-red-strip-motrex-original-imah4kj2wmj738nk.jpeg?q=70', discount: 'Up to 30% off', deal: 'Hot Deal' },
        { id: 10, image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/sari/t/b/r/free-sndlwod1306-tfh-sareemall-unstitched-original-imah3h4hkhgbkvjw.jpeg?q=70', discount: 'Up to 80% off', deal: 'Saree' },
    ];


    return (
        <div className="homeDetails"> 
            <div className="homedetailslongcard">
                <div className="homedetaillongcardtitle">Today's Deals</div>
                <div className="homeDetaillongcardWrapper">
                    <button className="scrollButton leftButton" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <div className="homeDetaillongcarditems" ref={scrollRef1}>
                        {items1.map(item => (
                            <div key={item.id} className="homeDetailLongCardItem">
                                <img 
                                    className="homedetaillongcarditemimg" 
                                    src={item.image} 
                                    alt="item" 
                                />
                                <div className="homedetailscarditemImgDetail">
                                    <div className="homedetailpercentoff">
                                        {item.discount}
                                    </div>
                                    <div className="limitedTimeDealHomeDeal">
                                        {item.deal}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scrollButton rightButton" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="homedetailslongcard">
                <div className="homedetaillongcardtitle">Upcoming Deals</div>
                <div className="homeDetaillongcardWrapper">
                    <button className="scrollButton leftButton" onClick={scrollLeft12}>
                        &lt;
                    </button>
                    <div className="homeDetaillongcarditems" ref={scrollRef2}>
                        {items.map(item => (
                            <div key={item.id} className="homeDetailLongCardItem">
                                <img 
                                    className="homedetaillongcarditemimg" 
                                    src={item.image} 
                                    alt="item" 
                                />
                                <div className="homedetailscarditemImgDetail">
                                    <div className="homedetailpercentoff">
                                        {item.discount}
                                    </div>
                                    <div className="limitedTimeDealHomeDeal">
                                        {item.deal}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scrollButton rightButton" onClick={scrollRight12}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;
