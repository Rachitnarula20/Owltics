import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import Active1 from './Active1';
import Active2 from './Active2';
import Active3 from './Active3';
import Active4 from './Active4';
import Active5 from './Active5';
import Img1 from '../assets/console.png'
import Img2 from '../assets/Database.png'
import Img3 from '../assets/Icon Grid.png'
import Img4 from '../assets/Network.png'
import Img5 from '../assets/User.png'

import { Avatar } from 'antd';


export default function Dev_Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 
  return (
    <div className='ml-48 mr-20 sml:mx-0'>
 <Box sx={{ width: '100%' }} >
 <TabContext value={value} >
      <TabList
        value={value}
        onChange={handleChange}
        textColor="primary"
        // indicatorColor="secondary"
        aria-label="secondary tabs example"
        
        className='mt-10'
      >
      
        <Tab icon={<Avatar src={Img1 }/> } iconPosition='start' value="1"  label="Console Traces" style={{textTransform:'capitalize', fontSize:16, fontWeight:'bold'}} className=' w-1/5 p-10'/>
        <Tab icon={<Avatar src={Img2 }/> } iconPosition='start' value="2" label="Network Log" style={{textTransform:'capitalize', fontSize:16, fontWeight:'bold'}} className='w-1/5 p-10'/>
        <Tab icon={<Avatar src={Img3 }/> } iconPosition='start' value="3" label="Browser storage " style={{textTransform:'capitalize', fontSize:16, fontWeight:'bold'}} className='w-1/5 p-10'/>
        <Tab icon={<Avatar src={Img5 }/> } iconPosition='start' value="4" label="User Events" style={{textTransform:'capitalize', fontSize:16, fontWeight:'bold'}} className='w-1/5  p-10'/>
        <Tab icon={<Avatar src={Img4 }/> } iconPosition='start' value="5" label="Browser & System " style={{textTransform:'capitalize', fontSize:16, fontWeight:'bold'}} className='w-1/5 p-10'/>
      </TabList>
      <hr />
    <TabPanel value="1"><Active1 /></TabPanel>
  <TabPanel value="2"><Active2 /></TabPanel>
  <TabPanel value="3"><Active3 /></TabPanel>
  <TabPanel value="4"><Active4 /></TabPanel>
  <TabPanel value="5"><Active5 /></TabPanel>
     </TabContext>
    </Box>
    </div>
   
  );
}