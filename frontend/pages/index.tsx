import { Categories } from '@comp-home/Categories';
import { Header } from '@comp-home/Header';
import { Layout } from '@comp-shared/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Header/>
        <Categories/>
      </>
    </Layout>
  )
}

export default Home;
