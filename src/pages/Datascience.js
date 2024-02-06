import React from 'react'
import Datascienceadditional from './DatascienceAdditional'

function Datascience() {
    let mydata = [{

        courseName: 'Data Science',
        image: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
        technologies: [
            { name: ' python', type: 'backend', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rwor81L81N7K47Kyx5uvMIU5UD6KTUhmf7MAHHH1pAiJmzfcBGpU0C138HcnSZQy1Go&usqp=CAU' },
            { name: 'Tableau', type: 'Business Intelligence Software', image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_900,q_auto:good,w_1200/v1/gcs/platform-data-tableau/contentbuilder/social_image_7kIceLI.png' },
            { name: 'Power BI', type: 'self-service and enterprise business intelligence', image: 'https://logowik.com/content/uploads/images/microsoft-power-bi4194.jpg' },
            { name: 'NLP', type: 'Natural Language Processing', image: 'https://iabac.org/blog/uploads/images/202308/image_870x_64c9f74011a7c.jpg' },
            { name: 'Machine Learning', type: 'ML algorithms', image: 'https://cdn-gcp.new.marutitech.com/robot_humanoid_using_tablet_computer_big_data_analytic_1_94eab7101e.jpg' },
            { name: 'Data Visualization', type: 'Data Visualization', image: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/06/What-is-Data-Visualization-Blog-Header.jpg' },
            { name: 'Computational Thinking', type: 'solving complex problems', image: 'https://i0.wp.com/zentechacademy.com/wp-content/uploads/2016/03/computational-thinking.jpg?fit=1920%2C1280&ssl=1' }
        ]
    }
    ]

    return (

        < div className="card-group"  >
            <div className='container-fluid d-flex justify-content-center' >
                <h1 style={{ color: 'blueviolet' }}>Data Science</h1>
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
            <Datascienceadditional />
        </div>
    )
}

export default Datascience
