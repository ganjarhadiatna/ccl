import React, { Component } from 'react'

// fasilitas
import fasilitas1 from '../../assets/img/fasilitas/1.jpg'
import fasilitas2 from '../../assets/img/fasilitas/2.JPG'
import fasilitas3 from '../../assets/img/fasilitas/3.JPG'
import fasilitas4 from '../../assets/img/fasilitas/4.JPG'
import fasilitas5 from '../../assets/img/fasilitas/5.JPG'
import fasilitas6 from '../../assets/img/fasilitas/6.JPG'
import fasilitas7 from '../../assets/img/fasilitas/7.JPG'
import fasilitas8 from '../../assets/img/fasilitas/8.JPG'
import fasilitas9 from '../../assets/img/fasilitas/9.JPG'
import fasilitas10 from '../../assets/img/fasilitas/10.JPG'
import fasilitas11 from '../../assets/img/fasilitas/11.JPG'
import fasilitas12 from '../../assets/img/fasilitas/12.JPG'
import fasilitas13 from '../../assets/img/fasilitas/13.JPG'
import fasilitas14 from '../../assets/img/fasilitas/14.JPG'
import fasilitas15 from '../../assets/img/fasilitas/15.JPG'
import fasilitas16 from '../../assets/img/fasilitas/16.JPG'
import fasilitas17 from '../../assets/img/fasilitas/17.JPG'
import fasilitas18 from '../../assets/img/fasilitas/18.JPG'
import fasilitas19 from '../../assets/img/fasilitas/19.JPG'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onContent = (val, title, desc) => {
    // var dt = []
    // for (let index = 0; index < val; index++) {
    //   dt.push(
    //     <div className="df-card card">
    //       <div className="image image-middle background-dark-grey"></div>
    //       <div className="padding-15px">
    //         <h3 className="txt-site txt-main">Title</h3>
    //         <p className="txt-site txt-11 txt-primary">Description</p>
    //       </div>
    //     </div>
    //   )
    // }
    return(
      <div className="df-card card no-hover">
          <div 
            style={{backgroundImage: 'url('+val+')'}}
            className="image image-full background-dark-grey"></div>
          <div className="padding-15px">
            <h3 className="txt-site txt-main">{ title }</h3>
            <p className="txt-site txt-11 txt-primary">{ desc }</p>
          </div>
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
        <h1 className="txt-site txt-center txt-main margin-top-15px margin-bottom-5px">
          Fasilitas
        </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-16 txt-primary margin-top-15px">
            Fasilitas yang disediakan
          </p>
        </div>

        <div className="padding-10px"></div>

        <div className="padding-15px app-mobile-none-padding">
          <div className="display-flex">
            { this.onContent(fasilitas1, 'title', 'description') }
            { this.onContent(fasilitas2, 'title', 'description') }
            { this.onContent(fasilitas3, 'title', 'description') }
            { this.onContent(fasilitas4, 'title', 'description') }
            { this.onContent(fasilitas5, 'title', 'description') }
            { this.onContent(fasilitas6, 'title', 'description') }
            { this.onContent(fasilitas7, 'title', 'description') }
            { this.onContent(fasilitas8, 'title', 'description') }
            { this.onContent(fasilitas9, 'title', 'description') }
            { this.onContent(fasilitas10, 'title', 'description') }
            { this.onContent(fasilitas11, 'title', 'description') }
            { this.onContent(fasilitas12, 'title', 'description') }
            { this.onContent(fasilitas13, 'title', 'description') }
            { this.onContent(fasilitas14, 'title', 'description') }
            { this.onContent(fasilitas15, 'title', 'description') }
            { this.onContent(fasilitas16, 'title', 'description') }
            { this.onContent(fasilitas17, 'title', 'description') }
            { this.onContent(fasilitas18, 'title', 'description') }
            { this.onContent(fasilitas19, 'title', 'description') }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages