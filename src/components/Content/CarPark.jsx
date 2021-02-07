import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CarPark = ({ carDetails }) => {
    if (carDetails.length === 0) {
        return (
            <div className="empty-msg">
                *No Car Parked at the moment
            </div>
        )
    } else {
        return (
            <div className="main-card">
                {
                    carDetails.length > 0 && carDetails.map(
                        ({entryTime, ticketNumber, status}, index) => {
                            return (
                                <Card className="card-container" key={index}>
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
                                            <span className="heading-label">Status:</span>
                                            <span>{status}</span>
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
                        }
                    )    
                }
            </div>
        )
    }       
};

CarPark.propTypes = {
    carDetails:PropTypes.arrayOf(PropTypes.shape({
        entryTime: PropTypes.string.isRequired,
        ticketNumber: PropTypes.string.isRequired,
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