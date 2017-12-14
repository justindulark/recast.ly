class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
    this.render();
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
        <Search />
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