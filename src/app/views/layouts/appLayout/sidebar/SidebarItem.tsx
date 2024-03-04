import { Link } from 'react-router-dom';
const SidebarItem = (props:any) => {
    const{ icon, text, active, sidebarOpen }=props;
    return (
        <Link to={`/${text}`}>
            <li className={`relative cursor-pointer justify-center flex items-center py-2 px-3 my-1 
        font-medium rounded-md transition-colors group ${active ? 'bg-color-orange text-color-orange font-bold bg-opacity-20':'hover:bg-color-gray-50'} `}>
                {icon}
                <span className={`overflow-x-hidden overflow-y-hidden ${!sidebarOpen?' transition-all ml-3 w-full':'w-0'} `}>{text}</span>

                {sidebarOpen && (
                    <div className={`absolute left-full rounded-md px-3 py-1 ml-6 bg-color-gray-50 
                 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible
                  group-hover:opacity-100  group-hover:translate-x-4`}>
                        {text}
                    </div>
                )}
            </li>
        </Link>

    );
};

export default SidebarItem;