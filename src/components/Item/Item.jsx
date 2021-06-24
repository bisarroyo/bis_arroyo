import React from 'react';
import StylesItem from './Styles';

export const Item = (props) => {
  const { image, title, url } = props;
  return (
    <StylesItem>
      <div className='projects-container'>
        <div className='projects-image'>
          <img src={image} alt='' />
        </div>
        <div className='projects-title'>{title}</div>
        <div className='projects-link'>
          <a href={url} target='_blank'>Link</a>
        </div>
      </div>
    </StylesItem>
  );
};

export default Item;
