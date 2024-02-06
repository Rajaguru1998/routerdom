import React from 'react'
import Cybersecurityadditional from './Cybersecurityadditional'

function Cybersecurity() {
    let mydata = [
        {
            courseName: 'Cyber Security',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
            technologies: [
                { name: ' Network Security', type: 'protecting computer systems, networks, and data from digital threats and unauthorized access', image: 'https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-network-security-blog-banner-628x353.png' },
                { name: 'Operating System Security', type: 'Secure Configurations', image: 'https://static.javatpoint.com/operating-system/images/operating-system-security.png' },

            ]
        }
    ]

    return (
        < div className="card-group"  >
            <div className='container-fluid d-flex justify-content-center' >
                <h1 style={{ color: 'blueviolet' }}>Cyber Security</h1>
            </div>
            <br></br>            
            {
                mydata.map((cources, index) => (

                    <div className="card container-fluid" style={{ margin: 20 }} key={index}>
                        {cources.technologies.map((item, index) => (
                            <div className="card container-fluid">
                                <img key={index} className="card-img-top" src={item.image} alt="Card image cap" width={25} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
            <Cybersecurityadditional/>
        </div>

    )
}

export default Cybersecurity