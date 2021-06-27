import React from 'react';
import { connect } from 'react-redux';

import Styles from './Styles';
import Item from '../Item/Item';

const ContainerSkills = (props) => {
  const { title } = props;
  console.log(props.projects.skills);
  return (
    <Styles id='skills'>
      <h1>{title}</h1>
      <div className='projects-main-container'>
        {props.projects.skills.map(item => (
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

export default connect(mapStateToProps, null)(ContainerSkills);
