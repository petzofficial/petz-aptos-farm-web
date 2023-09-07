import { Design1BellowHeader } from "../components/HomePage";
import Footer from "../components/HomePage/Footer";
import CustomTable from "../components/HomePage/CustomTable";
import Pagination from "../components/HomePage/Pagination";
import Head from "next/head";
// import HomePage from './index';
import Header from "components/HomePage/Header";

const HomePage = () => {
  return (
    <>
    <Head>
        <title>PetZ Money</title>
      </Head>
      <Header />
      <Design1BellowHeader />
      <CustomTable />
      <Pagination />
      <Footer />
    </>
  );
};

export default HomePage;
