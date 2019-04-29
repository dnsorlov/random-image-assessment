import React from 'react';
import PT from 'prop-types';
import api from './api';

import './RandomImage.css';

class RandomImage extends React.Component {

  static propTypes = {
    interval: PT.number,
    className: PT.string
  };

  static defaultProps = {
    interval: 10000
  };

  state = {imageSrc: null};

  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(this.getData, this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  getData = async () => {
    const resp = await api.getImage();
    const photos = await resp.json();
    const image = photos.photos.photo[0];
    const imageSrc =
      image.url_h || image.url_l || image.url_c || image.url_z || image.url_k || image.url_o;

    if (!imageSrc)
      return this.getData();

    this.setState({imageSrc})
  };

  render() {
    const {className = '', ...rest} = this.props;
    return (
      <img
        className={"RandomImage " + className}
        src={this.state.imageSrc}
        alt="random"
        onClick={this.getData}
        {...rest}
      />
    );
  }
}

export default RandomImage;
