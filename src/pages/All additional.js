import React from 'react';

const Home = () => {
    return (


        <div className='home-page' id='home-page'>

            <div className="card-content" id='card-content'>
                <img src="https://res.cloudinary.com/dmsxwwfb5/image/upload/v1595866967/full-stack-devlopment-min.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">FULL STACK DEVELOPMENT</p>
                </div>
            </div>
            <div className="card-content">
                <img src="https://st4.depositphotos.com/22162388/23954/i/600/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">CYBER SECURITY</p>
                </div>
            </div>
            <div className="card-content">
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">DATA SCIENCE</p>
                </div>
            </div> 
        </div>
    );
};

export default Home;