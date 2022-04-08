import type { NextPage } from 'next';
import HomeComponent from 'component/Templates/Home';

const Home: NextPage = ({post}:any) => {  
  return <HomeComponent blogMetaList={post}/>
}

export default Home;


export async function getStaticProps(){
  const response = await fetch('http://localhost:3000/api/getPosts');
  const post = await response.json();

  return {
    props: {
      post
    }
  }
}