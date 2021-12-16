import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <Head>
        <title>Habitat</title>
        <meta name="description" content="Your Favourite Habit Tracker" />
      </Head>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Home;
