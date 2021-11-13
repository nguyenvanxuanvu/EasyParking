import { SidebarDatas, SidebarItem } from './SidebarItem';
import { useState, useEffect } from 'react';


export function Sidebar(props) {
    const [activeIndex, setActiveIndex] = useState(props.path);
    useEffect(() => {
        console.log("Use Effect");
    });
    console.log(props.path);
    return (
    <div className="sidebar bg-secondary p-3 h-100">
        <ul class="px-0">
        {SidebarDatas.map((item, index) => {
            return (SidebarItem({path: item.link,
            title: item.title,
            icon: item.icon,
            isActive: (activeIndex == item.link),
            onClick: () => {setActiveIndex(item.link);}
            }));
        })}
        </ul>
    </div>
    );
}