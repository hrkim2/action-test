import { FunctionComponent } from "react";
import Link from 'next/link';

interface ArticleProps {
    articleLink?: string;
    articleName: string;
}

const MainArticle:FunctionComponent<ArticleProps> = ({articleLink, articleName, children})=>{
    return <article className={`${articleLink}List border border-default p-3 rounded-lg`}>
        <h2 className='text-default text-center tracking-widest font-bold border-double border-b pb-2'>
            {articleLink ?
            <Link href={`/${articleLink}`}>
                <a className='hover:text-light'>{articleName}</a>
            </Link>
            :
            articleName
            }
        </h2>
        {children || <div className='py-[60px] text-center text-black/70'>/ empty😪 /</div>}
    </article>
}

export default MainArticle;