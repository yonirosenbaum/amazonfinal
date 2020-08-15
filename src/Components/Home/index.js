import React from 'react';
import './index.css';
import Product from '../Product';

function Home() {
    return (
        <div className="home">
           <img className="home__image" src="/images/banner.png" alt="amazon prime banner"/>
           <div className="home__backgroundWrapper">
           <div className="home__row">
           <Product id="111" title="Silver cotton-fiber hammock " price={122.37} rating={4} image="/images/hammock.jpg" />
           <Product id="112" title="Influence: Science and Practice" price={12.24} rating={5} image="/images/influence.jpg" />
           </div>
           </div>
           <div className="home__row">
           <Product id="113" title="The Intelligent Investor" price={24.35} rating={4} image="/images/intelligentinvestor.jpg" />
           <Product id="114" title="Poor Charlie's Almanack" price={32.57} rating={4} image="/images/almanack.jpeg" />
           <Product id="115" title="Made In America" price={9.96} rating={4} image="/images/made-in-america.jpg" />
           </div>
           <div className="home__row">
           <Product id="116" title="The Startup Playbook" price={14.42} rating={3} image="/images/startupplaybook.jpg" />
           </div>
        </div>
    )
}

export default Home;