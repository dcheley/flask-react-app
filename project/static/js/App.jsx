import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

require('../css/app.css');
var $ = require('jquery');

import HeaderBackgroundImage from '../images/laptop-chill.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }

  render () {
    return (
      <PageHeader>
        <div className='header-contents'>
          {this.addHeaderImg()}
          <Hello name='Visitor' />
        </div>
      </PageHeader>
    );
  }
}
