import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Chris Dettloff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <h1>This is the home page!</h1>
      {/* Header */}
      {/* Body */}
      {/* Image of self */}
      {/* Footer */}
    </div>
  );
};

export default Home;
