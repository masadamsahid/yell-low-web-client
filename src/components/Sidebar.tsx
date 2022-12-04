import React, {ReactElement} from 'react';
import {Button, Stack} from "@chakra-ui/react";
import {MdExplore, MdHome, MdPerson} from 'react-icons/md';
import {IconType} from "react-icons";
import {Link} from "react-router-dom";

type sideMenuType = {
  title: string;
  link: string;
  icon?: ReactElement<IconType>;
}

const sideMenus: sideMenuType[] = [
  {
    title: 'Home',
    link: '',
    icon: <MdHome/>,
  },
  {
    title: 'Explore',
    link: 'explore',
    icon: <MdExplore/>,
  },
  {
    title: 'Profile',
    link: 'profile',
    icon: <MdPerson/>,
  },
];

const Sidebar = () => {
  return (
    <div className='hidden sm:block sticky top-24 h-fit rounded-md'>
      <Stack className='w-full md:w-[200px] rounded-md p-2 bg-[rgb(255,255,255,.4)] drop-shadow-lg flex flex-col gap-2 mb-2'>
        {sideMenus.map((menu) => (
          <Link to={`/${menu.link}`} key={menu.title} className='w-full h-fit'>
            <Button leftIcon={menu.icon} size='lg' variant='ghost' className='w-full text-black' bg='#fff'>
              {menu.title}
            </Button>
          </Link>
        ))}
      </Stack>
      <Button className='w-full bg-[rgb(247,224,24)]' bgColor='rgb(247,224,24)'>
        Yell 📢
      </Button>
    </div>
  );
};

export default Sidebar;