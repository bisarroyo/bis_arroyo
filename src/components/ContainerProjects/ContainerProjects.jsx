import React from 'react';
import { connect } from 'react-redux';

import Styles from './Styles';
import Item from '../Item/Item';

const ContainerProjcts = (props) => {
  const { title } = props;
  console.log(props.projects.pages);
  return (
    <Styles id='projects'>
      <h1>{title}</h1>
      <div className='projects-main-container'>
        {props.projects.pages.map(item => (
          <Item
            key={item.id}
            image={item.image}
            title={item.name}
            url={item.url}
          />
        ))}
      </div>
    </Styles>
  );
};

const mapStateToProps = (state) => {
  const item = state;
  return { projects: item };
};

export default connect(mapStateToProps, null)(ContainerProjcts);
