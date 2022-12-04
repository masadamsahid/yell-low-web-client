import React from 'react';
import {
  Avatar,
  Box,
  Button, Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text, useMediaQuery
} from "@chakra-ui/react";
import {BiChat, BiHeart, BsThreeDotsVertical} from "react-icons/all";
import {Link} from "react-router-dom";

const Post = () => {
  const [isMoreThan640px] = useMediaQuery('(min-width: 640px)');
  
  return (
    <Card className='w-full max-w-[600px] mb-5' bg='white'>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
            <Box>
              <Heading size='sm'>Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BsThreeDotsVertical/>}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the speed
          of design. I wanted the developer to be just as excited as the designer to
          create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
        maxH={'400px'}
      />
      <CardFooter
        justify='start'
        gap={2}
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button variant='ghost' leftIcon={<BiHeart/>} colorScheme='red'>
          10{isMoreThan640px ? ' Likes' : ''}
        </Button>
        <Link to='/posts/123'>
          <Button variant='ghost' leftIcon={<BiChat/>}>
            4{isMoreThan640px ? ' Comments' : ''}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Post;