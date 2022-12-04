import React from 'react';
import {Card, CardBody, CardHeader, Divider, Heading, Text} from "@chakra-ui/react";
import {MdInfo} from "react-icons/all";

const BasicInfos = () => {
  return (
    <Card variant='outline' className='h-fit'>
      <CardHeader className='text-center flex items-center gap-2'>
        <MdInfo/><Heading size='md'>Basic Infos</Heading>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className='flex justify-between mb-3'>
          <div className='text-center w-24'>
            <Heading size='lg'>200</Heading>
            <Text fontSize='xs'>Posts</Text>
          </div>
          <div className='text-center w-24'>
            <Heading size='lg'>200</Heading>
            <Text fontSize='xs'>Followers</Text>
          </div>
          <div className='text-center w-24'>
            <Heading size='lg'>200</Heading>
            <Text fontSize='xs'>Following</Text>
          </div>
        </div>
        <Divider className='mb-3'/>
        <div className="mb-3 bg-[rgb(247,224,24)]/20 hover:bg-[rgb(247,224,24)]/60  p-2 rounded">
          <Text fontSize='sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut dolor esse eveniet explicabo illum itaque labore laboriosam, nesciunt quam qui recusandae repellat unde ut?
          </Text>
        </div>
        {/*<Divider className='mb-3'/>
              <ul className=''>
                <li>
                </li>
              </ul>*/}
      </CardBody>
    </Card>
  );
};

export default BasicInfos;