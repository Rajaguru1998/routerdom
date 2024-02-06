import React from 'react'
import FullStackAdditional from './FullstackAdditional'

function Fulstackdevelopement() {
  let mydata = [{
    courseName: 'Fullstack Development',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp',
    technologies: [
      { name: ' HTML', type: 'frontend', image: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/html.jpg' },
      { name: 'CSS', type: 'frontend', image: 'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo' },
      { name: 'Javascript', type: 'frontend', image: 'https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png' },
      { name: 'React', type: 'frontend', image: 'https://solguruz.com/wp-content/uploads/2022/09/ReactJS-Framework-Benefits.png' },
      { name: 'Angular', type: 'frontend', image: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/11/angular-15-1.webp' },
      { name: 'Mongodb', type: 'database', image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png' },
      { name: 'Node', type: 'Backend', image: 'https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png' }
    ]
  }
  ]

  return (

    < div className="card-group"  >
      <div className='container-fluid d-flex justify-content-center' >
        <h1 style={{ color: 'blueviolet' }}>Fullstack Development</h1>
      </div>
      <br></br>
      {
        mydata.map((cources, index) => (

          <div className="card container-fluid" style={{ margin: 20 }} key={index}>
            {cources.technologies.map((item, index) => (
              <div className="card container-fluid">
                <img key={index} className="card-img-top" src={item.image} alt="Card image cap" height={500} width={300} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">course Type: {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      }
      <FullStackAdditional />
    </div>
  )
}

export default Fulstackdevelopement