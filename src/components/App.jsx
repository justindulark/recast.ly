class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.render();
  }

  parseData(data) {
    this.setState({
      videos: data.items
    });
  }
//Where I stopped: need to make query dynamic and search whats in the field
  submitHandler (query) {
    var options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: query
    };
    searchYouTube(options, (data)=> this.parseData(data));
    // var query = 
    // this.search(query);
  }

  clickHandler(clickedVideo) {
    this.setState({
      video: clickedVideo
    });
  }

  render() {
    return (
    <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search submitHandler={(query) => this.submitHandler(query)}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
       <VideoPlayer videos={this.state.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} clickHandler= {(clickedVideo) => this.clickHandler(clickedVideo) } />
      </div>
    </div>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);