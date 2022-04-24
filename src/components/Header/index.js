/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Header } from './styles';

export default ({scroll}) => {
  return (
    <Header className={scroll ? 'is-black' : ''}>
    {/* <Header className="is-black"> */}
      <div className='header-logotipo'>
        <a href='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158' />
        </a>
      </div>

      <div className='header-user'>
        <a href='/'>
          <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' />
        </a>
      </div>
    </Header>
  );
};

