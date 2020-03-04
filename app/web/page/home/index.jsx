import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { create } from './store';
import Wrapper from '@/component/wrapper';
import routes from '@/routes';

import './index.css';

export default class Home extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onEnter = () => {
    console.log('>>test');
  };

  render() {
    if (EASY_ENV_IS_NODE) {
      const store = create(this.props);
      const url = store.getState().url;
      return (
        <Wrapper>
          <Provider store={store}>
            <StaticRouter location={url}>{renderRoutes(routes)}</StaticRouter>
          </Provider>
        </Wrapper>
      );
    }
    const store = create(window.__INITIAL_STATE__);
    const url = store.getState().url;
    return (
      <Provider store={store}>
        <BrowserRouter location={url}>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    );
  }
}
