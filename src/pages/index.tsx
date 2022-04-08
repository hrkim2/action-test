import type { NextPage } from 'next';
import HomeComponent from 'component/Templates/Home';
import {getAllSortedPost} from 'data/blog';

const Home: NextPage = ({post}:any) => {
  return <HomeComponent blogMetaList={post}/>
}

export default Home;

export async function getStaticProps(){
  const post = await getAllSortedPost();

  return {
    props: {
      post
    }
  }
}