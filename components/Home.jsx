import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <p>
        This is a simple, style free app using the React for GitHub Pages boilerplate.
        It is built with React and React Router using browserHistory.
        Navigate with the links below and refresh the page or copy/paste
        the url to test out the redirect functionality deployed to overcome
        GitHub Pages incompatibility with single page apps with frontend
        routing (like this one). For instructions on how to use this
        boilerplate to deploy your own React project using GitHub Pages
        see <a href="https://github.com/rafrex/react-github-pages#readme">
        the repo</a>.
      </p>
      <div><Link to="/example">Example page</Link></div>
      <div><Link to="/example/two-deep?field1=foo&field2=bar">
        Example two deep with query
      </Link></div>
    </div>
  );
}

export default Home;