import React from 'react'
import './index.scss'
import Logo from './logo.png'

class AppDX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        status: null,
        totalResults: 0,
        articles: []
      },
      isLoaded: false
    }
  }


  render() {
    if (this.props.post) {
      return (
        <div class="card" style={{width: '80%'}}>
          <img src={this.props.post.urlToImage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.post.title}</h5>
            <p class="card-text">{this.props.post.content}</p>
            <a href={this.props.post.url} class="btn btn-primary">Read more</a>
          </div>
        </div>
      )
    } else {
      return ( <h6 className="note"> {this.props.msg}</h6> )
    }
  }
}
export default AppDX;
