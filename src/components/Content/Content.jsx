import React from 'react';
import TabPanel from '../Tabs/TabPanel';
import TabHeader from '../Tabs/TabHeader';
import HomePage from './HomePage';
import CarPark from './CarPark';
import '../ParkingLot.scss';

const Content = () => {
  const [tabValue, setTabValue] = React.useState(0);
  return (
    <React.Fragment>
      <TabHeader value={tabValue} handleChange={(event, newValue)=>{setTabValue(newValue)}} />
      <TabPanel value={tabValue} index={0}>
        <HomePage />  
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <CarPark />
      </TabPanel>
    </React.Fragment>
  );
}

export default Content;