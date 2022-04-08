import { FunctionComponent } from "react";
import Link from 'next/link';
import {BlogMeta} from '../types/Blog';
import MainArticle from 'component/Molecules/MainArticle';

interface HomeProps {
    blogMetaList: BlogMeta[];
}

const Home: FunctionComponent<HomeProps> = ({blogMetaList})=>{
    return <div className='space-y-4'>
        <MainArticle articleLink="blog" articleName="🗳Blog">
            {blogMetaList.length>0 &&
            <div className='mt-2 mb-1.5 px-1 space-y-2 divide-y divide-aaa/30 min-h-[300px]'>
                {blogMetaList.map(blogMeta=>{
                    return <div key={blogMeta.id} className="flex flex-row py-3 px-2">
                        <div className='flex-1 self-center'>
                            <Link href={`/blog/${blogMeta.id}`}>
                                <a className="font-semibold text-black/80 hover:text-aaa">
                                    <div>{blogMeta.title}</div>
                                </a>
                            </Link>
                            <div className='text-xs text-light cursor-default self-center pt-1'>
                                {blogMeta.category[1]} | #{blogMeta.tag.join(' #')}
                            </div>
                        </div>
                        <span className='flex-none text-aaa text-xs'>
                            {blogMeta.date}
                        </span>
                    </div>;
                })}
            </div>
            }
        </MainArticle>
        {/* <MainArticle articleLink="portfolio" articleName="🗃Portfolio"/> */}
    </div>;
}

export default Home;