import React from 'react';
import { connect } from 'react-redux';

import Styles from './Styles';
import Item from '../Item/Item';

const ContainerItem = (props) => {
  const { title } = props;
  console.log(props.projects.pages);
  return (
    <Styles>
      <h1>{title}</h1>
      <div className='projects-main-container'>
        {props.projects.pages.map(item => (
          <Item
            key={item.id}
            image={item.image}
            title={item.name}
            url={item.image}
          />
        ))}
      </div>
    </Styles>
  );
};

const mapStateToProps = (state) => {
  const item = state.initialState;
  return { projects: item };
};

export default connect(mapStateToProps, null)(ContainerItem);
