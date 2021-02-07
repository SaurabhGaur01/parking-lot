import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../ParkingLot.scss';

const TabHeader = ({ handleChange, value }) => (
    <AppBar position="static">
        <div className="container-head">
            <div className="tabs">
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="HomePage" id = "tab-1" />
                    <Tab label="Parked Cars" id = "tab-2" />
                </Tabs>
            </div>
        </div>    
    </AppBar>
)


TabHeader.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

export default TabHeader;