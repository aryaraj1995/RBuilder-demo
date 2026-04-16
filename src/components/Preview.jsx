import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
Button
function Preview() {
  return (
    <div className='p-5 m-5 w-100'>
      <h2>Full Name</h2>
      <p className='fs-6'>Phone:123456</p>
      <p className='fs-6'>Email:email</p>
      <p className='fs-6'>LinkdIn: <a href="">URL</a> </p>
      <p className='fs-6'>GitHub: <a href="">URL</a></p>
      <p className='fs-6'>Location:location</p>
       <Divider className='bg-dark my-3' />
       <h4 className='mt-3'>Professional Summary</h4>
       <p>Summary</p>
      <Divider className='bg-dark my-3' />
       <h4 className='mt-3'>Technical Skills</h4>
       {/* duplicate user skill */}
       <Button variant="outlined">Skill</Button>
        <Divider className='bg-dark my-3' />
        <h4>Education</h4>
        <p className='fs-6'>Bachelor's Degree in <b>Degree</b></p>
        <p className='fs-6'>University/College name </p>
         <p className='fs-6'>Year of Graduation </p>
         <Divider className='bg-dark my-3' />
    </div>

  )
}

export default Preview