import { MdSupervisorAccount, MdArticle } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";
import { palette } from '../utils/palette';


export interface NavbarMenuType {
    name: string
    path: string
}
export interface BannerDataType {
    title: string
    description: string
    icon: any
}

export const navbarMenu: NavbarMenuType[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Blog',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/'
    },
    {
        name: 'Contact Us',
        path: '/'
    },
]

export const bannerData: BannerDataType[] = [
    {
        title: '12k Visitors ',
        description: 'In the last week ',
        icon: <MdSupervisorAccount color={palette.primary} size={24} />

    },
    {
        title: '12k Visitors ',
        description: 'In the last week ',
        icon: <AiFillRead color={palette.primary} size={24} />

    },
    {
        title: '12k Visitors ',
        description: 'In the last week ',
        icon: <MdArticle color={palette.primary} size={24} />

    },
]