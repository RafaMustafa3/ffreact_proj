import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import { Timeline } from 'react-twitter-widgets'
import './css/s_main.css';

class Buffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=financial-times,espn'
      },
      news2: {
        type: 'everything',
        query: 'source=techcrunch'
      },
      news3: {
        type: 'everything',
        query: 'source=hacker-news'
      }
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col s8" id="lowerBody">
          <News news={this.state.news1} />
          <News news={this.state.news2} />
        </div>
        <div className="col s2" id="tweetTweet">
          <div className="twitterFeed">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'OneSourceNews1'
              }}
              options={{
                username: 'OncSourceNews',
                height: '730'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Buffer;
