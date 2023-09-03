import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../layouts/main-layout";
import { Typography } from "@mui/material";
const Home = ({ data }: { data: any[] }) => {
  return (
    <>
      <Head>
        <title>
          Test 
        </title>
      </Head>
      <Typography sx={{color: theme=>theme.palette.primary.main }}>
        Abc
      </Typography>
    </>
  );
};
Home.getLayout = (page:any) => (
    <MainLayout>
      {page}
    </MainLayout>
  );

export default Home;
