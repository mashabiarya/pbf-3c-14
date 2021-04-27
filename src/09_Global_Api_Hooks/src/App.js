import React from 'react';
import BlogPost from "./components/BlogPost";
import CommentPost from "./components/CommentBlog";

class App extends React.Component {

  render () {
    return (
      <div>
        <BlogPost />
        <CommentPost />
      </div>
    );
  }
}

export default App;