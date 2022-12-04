import React from 'react';
import {Avatar, Card, CardBody, CardHeader, Divider, Heading, Image, Text} from "@chakra-ui/react";
import Post from "../components/Post";
import {MdInfo} from "react-icons/all";
import BasicInfos from "../components/BasicInfos";

const ProfilePage = () => {
  return (
    <div className='w-full'>
      <Card bg='white'>
        <CardHeader className='flex flex-col items-center'>
          <Image
            className='h-80 w-full object-cover rounded-md mb-12'
            borderRadius='md'
            src="https://i.pinimg.com/originals/55/b4/1e/55b41ec86260b35ab0ae46fa6a5424c0.jpg"
          />
          <Avatar
            size='2xl'
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
            className='top-64 z-10'
            pos='absolute'
          />
          <div className='text-center p-2'>
            <Text color='gray'>@adebayosage</Text>
            <Heading  className='mb-2'>Segun Adebayo</Heading>
            <Divider  className='mb-1'/>
            <Text color='gray.700'>Creator, Chakra UI</Text>
          </div>
          <div className='lg:hidden max-w-2xl'>
            <BasicInfos/>
          </div>
        </CardHeader>

        <CardBody className='flex gap-5 justify-center lg:justify-start'>
          {/* Basic Infos */}
          <div className="hidden lg:block flex-1">
            <BasicInfos/>
          </div>

          <div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfilePage;