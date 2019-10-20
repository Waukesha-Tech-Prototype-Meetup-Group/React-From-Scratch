import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

interface HomePageProps extends RouteComponentProps {}

const Home: React.FC<HomePageProps> = (props: HomePageProps) => {
  return <div>Home Page</div>;
};

export default Home;
