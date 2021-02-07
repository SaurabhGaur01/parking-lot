import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarParkContent from './CarParkContent';

const CarPark = ({ carDetails }) => {
    if (carDetails.length === 0) {
        return (
            <div className="empty-msg">
                *No Car Parked at the moment
            </div>
        )
    }
    return (
        <div className="main-card">
            {
                carDetails.map((item, index) => {
                    return <CarParkContent carDetail={item} key={index} />
                })    
            }
        </div>
    )       
};

CarPark.propTypes = {
    carDetails:PropTypes.arrayOf(PropTypes.shape({
        entryTime: PropTypes.string.isRequired,
        ticketNumber: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    })),
};

export const mapStateToProps = state => ({
    carDetails: state.carDetails,
});

const hocChain = compose(
    connect(mapStateToProps),
);
  
export default hocChain(CarPark);