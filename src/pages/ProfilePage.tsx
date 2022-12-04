import React from 'react';
import {Avatar, Card, CardHeader, Heading, Image, Text} from "@chakra-ui/react";

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
            <Heading>Segun Adebayo</Heading>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProfilePage;