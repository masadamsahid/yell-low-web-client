import React from 'react';
import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {SearchIcon} from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <div className='w-full p-2 sticky flex items-center justify-center drop-shadow-lg bg-white'>
      <div className='max-w-7xl w-full p-2 flex items-center justify-between'>
        <div className='flex justify-center items-center gap-2'>
          <Image
            className='w-6 h-6 sm:w-12 sm:h-12'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
          />
          <h1 className='hidden md:block text-2xl font-extrabold fonp'>
            Yell-Low!
          </h1>
        </div>
        
        <form className='' onSubmit={(e) => {
          e.preventDefault()
        }}>
          <InputGroup>
            <Input w={[200, 300, 400]} placeholder='Search' bgColor='white'/>
            <InputRightElement>
              <IconButton type='submit' aria-label='Search user' icon={<SearchIcon/>} size='sm'/>
            </InputRightElement>
          </InputGroup>
        </form>
        
        <div>
          <ButtonGroup>
            <Link to='/login'>
              <Button>
                Login
              </Button>
            </Link>
            <Link to='/register' className='hidden sm:block'>
              <Button bgColor='rgb(247,224,24)'>
                Register
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;