var searchYouTube = (options, callback) => {
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    success: (data) => {
      callback(data);
    },
    error: (data) => {
      console.log('ERROR: JUSTIN NEEDS TO LEAVE AT 8');
    } 
  });
};

window.searchYouTube = searchYouTube;
