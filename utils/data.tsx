import { MdSupervisorAccount, MdArticle, MdOutlineUpdate } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';
import { TfiMedall } from 'react-icons/tfi';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { palette } from '../utils/palette';

export const siteName = 'javaautomation.com';

export interface NavbarMenuType {
  name: string;
  path: string;
}
export interface FooterType {
  name: any;
  url: string;
}
export interface BannerDataType {
  title: string;
  description: string;
  icon: any;
}

interface Categories {
  name: string;
  id: string;
}

export interface QueryInterface {
  id: string;
  title: string;
  category: Categories;
  body: string;
  images?: string | Array<string> | any;
  created_at?: string;
  view?: number;
}

export const navbarMenu: NavbarMenuType[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];

export const bannerData: BannerDataType[] = [
  {
    title: '12k Visitors ',
    description: 'In the last week ',
    icon: <MdSupervisorAccount color={palette.primary} size={24} />,
  },
  {
    title: '12k Readers  ',
    description: 'In the last week ',
    icon: <AiFillRead color={palette.primary} size={24} />,
  },
  {
    title: '12k Articles  ',
    description: 'In the last week ',
    icon: <MdArticle color={palette.primary} size={24} />,
  },
];

export const introductionData: BannerDataType[] = [
  {
    title: 'Fast and Trusted ',
    description: 'We provide very informative and clear news ',
    icon: <BsFillLightningChargeFill color={palette.primary} size={24} />,
  },
  {
    title: 'Up to Date  ',
    description: 'We present news that is hotly discussed',
    icon: <MdOutlineUpdate color={palette.primary} size={24} />,
  },
  {
    title: 'Convenient Website',
    description: 'We really prioritize user comfort in using our site. For us, user convenience is the main mission of this site. Comfortable users, we are happy',
    icon: <TfiMedall color={palette.primary} size={24} />,
  },
];

export const footerData: FooterType[] = [
  {
    name: <FiTwitter size={32} />,
    url: 'facebook.com',
  },
  {
    name: <FiFacebook size={32} />,
    url: 'facebook.com',
  },
  {
    name: <FiInstagram size={32} />,
    url: 'facebook.com',
  },
];

export const blurDataURL =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';
