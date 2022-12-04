import React from 'react';
import Post from "../components/Post";
import {Button, Card, CardBody, CardHeader, Input, Textarea} from "@chakra-ui/react";
import {RiDeleteBinFill, RiSendPlaneFill} from "react-icons/ri";
import Comment from "../components/Comment";

const PostDetailPage = () => {
  return (
    <div className='w-full'>
      <Post/>
      
      <Card bg='white' className='w-full max-w-[600px] mb-5'>
        <CardHeader>
          <form className='flex flex-col gap-2' onSubmit={(e) => e.preventDefault()}>
            <Textarea
              placeholder='Add ad comment ...'
            />
            <div className='flex flex-row-reverse justify-start gap-2'>
              <Button type='submit' rightIcon={<RiSendPlaneFill/>} size='sm' bg='rgb(247,224,24)'>
                Add Comment
              </Button>
              <Button type='reset' rightIcon={<RiDeleteBinFill/>} size='sm' variant='ghost' colorScheme='red'>
                Cancel
              </Button>
            </div>
          </form>
        </CardHeader>
        <CardBody display='flex' flexDirection='column' gap={5}>
          <Comment/>
          <Comment/>
          <Comment/>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostDetailPage;