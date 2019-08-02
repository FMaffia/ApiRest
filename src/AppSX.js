import React from 'react'
import './index.scss'
import Logo from './logo.png'
import AppDX from './AppDX';

class AppSX extends React.Component {
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

  /*componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }*/

  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-02&sortBy=publishedAt&apiKey=dbd2c5a1acba46019392ad77b4794aff')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return <div className="App">
        <h4>News Presenti</h4>
        {this.state.items.articles.map(
          article => 
          <div>
          <button className="btn btn-link"
            onClick={() => this.viewPost(article)} >{article.source.name} </button>
          </div>
          )}
      </div>
    }
  }
  viewPost(item) {
    let oggetto = { postSelected: item };
    this.props.selezionaPost(oggetto)
  }
}

export default AppSX;
