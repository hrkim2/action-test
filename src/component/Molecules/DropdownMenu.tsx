import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link';
import {Menu} from 'component/types/Menu';

interface DropDownProps {
    menu: Menu;
    activePath: string;
}

const DropdownMenu:FunctionComponent<DropDownProps> = ({menu, activePath=''})=>{
    const DROPDOWN_PREFIX = 'dropdown_';
    const [toggleLi, setToggleLi] = useState('hidden');
    const {name, url, children} = menu;
    const buttonText = activePath.startsWith(url) ? 'text-highlight' : '';
    const partList = children!
        .map(child=>child.part)
        .filter((part, idx, list)=>idx===list.indexOf(part));
    const ulList = partList.map((part, i)=>{
        return <ul key={`ul-${i}`} className="py-1 text-sm dark:text-efefef">
            {part&&part.trim()!=='' && <span className='pl-2 text-black text-xs font-bold'>{part}</span>}
            {children!
            .filter(child=>child.part===part)
            .map((child, j)=>{
                const linkArea = activePath.startsWith(`${url}${child.url}`) ? 'bg-light text-white' : '';
                return <li key={`${i}-${j}`}>
                    <Link href={`${url}${child.url}`}>
                        <a className={`block py-2 px-4 ${linkArea} hover:bg-light/20 duration-300 dark:hover:bg-gray-600 dark:hover:text-white`}>
                            {child.name}
                        </a>
                    </Link>
                </li>
            })
            }
        </ul>
    });

    useEffect(()=>{
        const dropdownToggle = (e:MouseEvent)=>{
            const target = e.target as HTMLElement;
            if(target.dataset.dropdownFor!==`${DROPDOWN_PREFIX}${name}` && target.closest(`#${DROPDOWN_PREFIX}${name}`)===null){
                setToggleLi('hidden');
                window.removeEventListener('click', dropdownToggle);
            }
        }
        window.addEventListener('click', dropdownToggle);
    }, [toggleLi]);

    return <>
        <button
            data-dropdown-for={`${DROPDOWN_PREFIX}${name}`}
            className={`flex justify-between items-center py-2 pr-4 pl-3 w-full ${buttonText} font-medium border-b border-white hover:border-light duration-500 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700`}
            onClick={()=>setToggleLi(toggleLi==='hidden' ? '' : 'hidden')}
        >
            {name} 🗂
        </button>
        <div
            id={`${DROPDOWN_PREFIX}${name}`}
            className={`${toggleLi} relative md:absolute z-0 md:z-10 w-auto bg-white rounded divide-y divide-light/70 bg-efefef/20 md:bg-white md:shadow mx-5 my-2 md:m-0 dark:bg-gray-700 dark:divide-gray-600`}
        >
            {ulList}
        </div>
    </>;
}

export default DropdownMenu;