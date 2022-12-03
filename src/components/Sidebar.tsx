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
    <Stack className='w-full md:w-[200px] hidden md:block rounded-md p-2 h flex flex-col gap-2'>
      {sideMenus.map((menu) => (
        <Link to={`/${menu.link}`} key={menu.title} className='w-full h-fit'>
          <Button leftIcon={menu.icon} size='lg' variant='ghost' className='w-full text-black'>
            {menu.title}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default Sidebar;