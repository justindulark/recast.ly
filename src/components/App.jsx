class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
    this.render();
  }

  search(query) {
    $.ajax ({
      type: 'GET',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        url: 'https://www.googleapis.com/youtube/v3/search',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      dataType: 'json',
      success: (data) => {
        this.setState({
          videos: data
        });
      },
      error: (data) => {
        console.log('ERROR: JUSTIN NEEDS TO LEAVE AT 8');
      } 
    });
  
  }


  submitHandler() {
    this.search(query);
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
        <Search submitHandler={() => this.submitHandler()}/>
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