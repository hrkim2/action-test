import { FunctionComponent, useEffect, useState } from "react";
import Navbar from 'component/Molecules/Navbar';
import menuList from 'data/menu.json';

interface LayoutProps {
    asPath: string;
}

const mainPadding = <div className="aside-non-role h-full flex-auto w-2"></div>;

const Layout: FunctionComponent<LayoutProps> = ({asPath, children})=>{
    const [headerClass, setHeaderClass] = useState('');
    const [scrollState, setScrollState] = useState(0);
    const [footerClass, setFooterClass] = useState('mt-5');

    useEffect(()=>{
        const setFooter = ()=>{
            const windowHeight = window.innerHeight;
            const contentHeight = document.querySelector('.mainArea')!.clientHeight;
            windowHeight-150 > contentHeight ? setFooterClass('fixed bottom-0 w-full') : setFooterClass('mt-5');
        }
        window.addEventListener('resize', setFooter);
        setFooter();
    }, [footerClass, children]);

    useEffect(()=>{
        const setHeader = ()=>{
            const {scrollY} = window;

            if(scrollY>36 && scrollState>=scrollY){
                setHeaderClass('z-10 fixed top-0 w-full shadow')
            }else{
                setHeaderClass('')
            }
            setScrollState(scrollY);
        }
        window.addEventListener('scroll', setHeader);
        setScrollState(window.scrollY);
    }, [scrollState]);

    return <div className='text-black'>
        <header className={headerClass}>
            <Navbar menuList={menuList} activePath={asPath}/>
        </header>
        <div className="mainArea flex flex-row">
            {mainPadding}
            <main className='px-3 w-full lg:w-[1000px] my-4 flex-none'>
                {children}
            </main>
            {mainPadding}
        </div>
        <footer className={`p-5 bg-default ${footerClass} w-full text-white tracking-widest`}>
            <div>📧m3rri17@gmail.com</div>
            <div>©2022 KimHyeRi. All rights reserved.</div>
        </footer>
    </div>;
}

export default Layout;