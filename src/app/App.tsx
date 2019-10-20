import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Home from '../views/Home';
import MainMenu from '../components/organisms/MainMenu';
import Header from '../components/atoms/Header';

export const App: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      <Home path="/" />
    </>
  );
};
