import React from 'react';
import './Products.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import freshcuts from "../assets/freshcuts.jpg";
import cutmeat from "../assets/cutmeat.jpg";
import meat from "../assets/meat.webp";
function Products() {
    const items = [
        {
            title: "Fresh Cuts",
            desc: "Premium goat and mutton cuts in Hyderabad, 100% FSSAI-compliant.",
            img: freshcuts
        },
        {
            title: "Value-Added Products",
            desc: "Marinated cuts, ready-to-cook meals, meatballs—perfect for today’s fast lifestyles.",
            img: cutmeat
        },
        {
            title: "By-Products",
            desc: "Sustainable use of casings and leather, supporting a zero-waste meat industry.",
            img: meat
        }
    ];

    return (
        <section className="products-section" id="products" >

            {/* Header Section */}

            <div className="text-center mb-5" >
                <h5 className="section-subtitle">OUR OFFERINGS</h5>
                <div className="products-intro" >
                    <div data-aos="fade-down">
                        <h3>Fresh, Hygienic & Sustainable</h3>
                        <p >
                            At Arekatika Meat Udyog Ltd, we provide the best goat meat and sheep meat in Telangana,
                            prepared to meet the needs of households, restaurants, and exporters. Our products use NMRI technology and nutritional profiling, ensuring unmatched quality, taste, and health benefits.
                        </p>
                    </div>
                </div>
            </div>


            {/* Products Grid */}
            <div data-aos="flip-right">
                <div className="products-container" >
                    <div className="products-row" >
                        {items.map((item, index) => (
                            <div className="product-card" key={index} >

                                <div className="product-img-wrapper" >
                                    <img src={item.img} alt={item.title} className="product-img" />
                                </div>

                                <div className="product-content">
                                    <h4 className="product-title">{item.title}</h4>
                                    <p className="product-desc">{item.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
