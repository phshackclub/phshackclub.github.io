import React from 'react';
import SiteLayout from '../SiteLayout';
import { Carousel } from 'antd';
import './Home.css';

const Home = () => {
    return (
        <SiteLayout>
            <h1>Home</h1>
            <br />
            <Carousel autoplay>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
            </Carousel>
        </SiteLayout>
    )
}

export default Home;
