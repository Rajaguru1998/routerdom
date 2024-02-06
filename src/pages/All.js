import React, { useState } from 'react'
import Home from './All additional'

function All() {
  let mydata = [{
    courseName: 'Fullstack Development',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp',

    content: "Full Stack Development refers to the practice of developing both the front-end and back-end components of a web application. In this introductory module, you will learn the fundamentals of full stack development and gain a solid understanding of the different technologies involved."


  },


  {
    courseName: 'Data Science',
    image: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    content: "The field of study that deals with extracting knowledge and insights from data using scientific methods. A professional who uses their skills in statistics, programming, and domain knowledge to analyze and interpret complex data."

  },
  {
    courseName: 'Cyber Security',
    image: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
    content: "Cyber security refers to the practice of protecting computer systems, networks, and data from digital threats and unauthorized access. It involves implementing measures and adopting strategies to prevent, detect, and respond to cyber attacks."

  }
  ]



  return (

    < div className="card-group"  >
      {
        mydata.map((cources, index) => (

          <div className="card container-fluid" style={{ margin: 20 }} key={index}>
            <img className="card-img-top" src={cources.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{cources.courseName}</h5>
              <p className="card-text">{cources.content}</p>              
            </div>
          </div>
        ))
      }
      <Home/>
    </div>


  )
}

export default All