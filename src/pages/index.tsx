import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../layouts/main-layout";
const Home = ({ data }: { data: any[] }) => {
  return (
    <>
      <Head>
        <title>
          Test 
        </title>
      </Head>
    </>
  );
};
Home.getLayout = (page:any) => (
    <MainLayout>
      {page}
    </MainLayout>
  );

export default Home;
