import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link';
import {Menu} from 'component/types/Menu';
import DropdownMenu from './DropdownMenu'

interface NavbarProps {
    menuList: Menu[];
    activePath: string;
}

const BLOG_NAME = 'MERRI`s DEVELOG';

const Navbar:FunctionComponent<NavbarProps> = ({menuList, activePath})=>{
    const [toggleUl, setToggleUl] = useState('hidden');
    console.log(activePath);
    const linkList = menuList.map((menu, idx)=>{
        const linkText = activePath.startsWith(menu.url) ? 'text-highlight' : '';

        return <li key={`${idx}_0`}>
            {
            menu.children && menu.children.length>0
            ?
            <DropdownMenu menu={menu} activePath={activePath}/>
            :
            <Link href={menu.url}>
                <a className={`block py-2 pr-4 pl-3 ${linkText} border-b border-white hover:border-light duration-500 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700`}>
                    {menu.name} 📄
                </a>
            </Link>
            }
        </li>;
    });

    useEffect(()=>{
        const menuListToggle = ()=>{
            const {innerWidth} = window;
            if(innerWidth<768){
                setToggleUl('hidden');
            }else{
                setToggleUl('');
                window.addEventListener('resize', menuListToggle);
            }
        }

        window.addEventListener('resize', menuListToggle);
    } ,[toggleUl]);

    return <nav className="py-1 px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
                <a className="flex items-center">
                    <span className="self-center text-xl text-default font-bold whitespace-nowrap dark:text-white">
                        {BLOG_NAME}
                    </span>
                </a>
            </Link>
            <button
                type="button"
                className="inline-flex justify-center items-center ml-3 rounded-lg md:hidden px-1 focus:outline-none focus:ring-2 focus:ring-light/20 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                onClick={()=>setToggleUl(toggleUl==='hidden' ? '' : 'hidden')}
            >
                <span className="sr-only">Open main menu</span>
                📚
            </button>
            <div className={`${toggleUl} w-full border-b border-efefef md:border-0 md:block md:w-auto`}>
                <ul className="divide-y divide-efefef flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:divide-x md:divide-white">
                    {linkList}
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;