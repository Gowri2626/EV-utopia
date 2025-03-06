import React from 'react';
import ProductsData from '../data/ProductsData';
import ProductsCard from '../menu/ProductsCard';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            ProductsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;