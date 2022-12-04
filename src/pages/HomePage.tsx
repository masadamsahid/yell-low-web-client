import React from 'react';
import Post from "../components/Post";
import {Post as PostType, User} from "../types";

const users: User[] = [
  {
    id: 1,
    username: 'adebayosage',
    email: 'adebayosage@mail.com',
    fullName: 'Segun Adebayo',
    createdAt: new Date(2016, 2, 7),
    description: 'Love to code',
    profileImg: 'https://bit.ly/sage-adebayo',
    title: 'Creator, Chakra UI',
  },
  {
    id: 2,
    username: 'masadamsahid',
    email: 'masadamsahid@mail.com',
    fullName: 'Maulana Adam Sahid',
    createdAt: new Date(2016, 2, 8),
    description: 'Full Stuck Developer 😛',
    profileImg: 'https://media-exp1.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1675296000&v=beta&t=ZydGKJiW-_nNmdiqG4ArNjzMGbb8TqCyVO-TjXMKWFc',
    title: 'Just got graduated from college',
  },
  {
    id: 3,
    username: 'johncenawwe',
    email: 'johncena@mail.com',
    fullName: 'John Cena',
    createdAt: new Date(2018, 2, 7),
    description: 'Love to code',
    profileImg: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTCMDfBiRTQE3v0Xq04e6aHuecC142Mlc8Fd_rP0WAq6t-Bn5kUoby-EvyBtegXNUKLKa5we_Z4pWAvB-4',
    title: 'Pro-Wrestler',
  },
];

const posts: PostType[] = [
  {
    id: 1,
    comments: [],
    likes: [],
    image: '',
    type: 1,
    ownerId: 1
  }
];

const HomePage = () => {
  return (
    <div className='w-full'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default HomePage;