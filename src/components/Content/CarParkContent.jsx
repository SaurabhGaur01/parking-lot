import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CarParkContent = ({ carDetail: {entryTime, ticketNumber, status, price }}) => (     
    <Card className="card-container">
        <CardContent>
            <div className="section">
                <div className="heading-label">Ticket Number:</div>
                <div className="description">{ticketNumber}</div>
            </div>

            <div className="section">
                <div className="heading-label">Entry Time:</div>
                <div className="description">{entryTime}</div>
            </div>

            <div className="section">
                <div className="heading-label">Status:</div>
                <div className="description">{status}</div>
            </div>

            <div className="section">
                <div className="heading-label">Price:</div>
                <div className="description">£{price}</div>
            </div>

            <div className="row pay-section">
                <div className="col-3"></div>
                <div className="col-6">
                    <button className="btn btn-sm btn-success">Pay & Exit</button>
                </div>
            </div>
        </CardContent>
    </Card>
)
               
CarParkContent.propTypes = {
    carDetail:PropTypes.shape({
        entryTime: PropTypes.string.isRequired,
        ticketNumber: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    }),
};
  
export default CarParkContent;