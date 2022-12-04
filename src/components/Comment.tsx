import React from 'react';
import {Avatar, Box, Divider, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Comment = () => {
  return (
    <Link to='/profile' className='flex gap-2'>
      <Avatar
        name='Segun Adebayo'
        src='https://bit.ly/sage-adebayo'
        size='sm'
      />
      
      <div>
        <div>
          <Heading size='xs'>Segun Adebayo</Heading>
          <Text color='gray' fontSize='xs'>Creator, Chakra UI</Text>
        </div>
        <Divider className='mb-2'/>
        <Text fontSize='xs'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, at autem consequuntur doloremque eaque eius error fuga in nobis nostrum placeat quis quo reiciendis sunt!
        </Text>
      </div>
    </Link>
  );
};

export default Comment;