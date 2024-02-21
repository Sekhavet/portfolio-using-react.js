import React from 'react'
import Work from './Work'
import WorkData from './WorkData'

const Works = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkData.map((value, index) => {
            return (
                <Work 
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    source={value.source}
                />
            )
           })} 
        </div>
    </div>
  )
}

export default Works