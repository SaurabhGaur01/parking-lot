import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { setCarDetails } from '../../ducks/carDetails';
import { getTicket } from '../../utils/parkingLot';

const HomePage = ({ actionSetCarDetails }) =>{
	const submitHandler = () => {
        const getTicketDetails = getTicket();
        actionSetCarDetails(getTicketDetails);
	}

    return (
        <div className="main-card"> 
            {
                <React.Fragment>
                    <Card className="card-containers">
                        <CardContent>
                            <div className="row">
                                <label className="col-6">
                                    <span className="col-6">Total Parking Slots </span>
                                    <input className="col-3" type="number" name="total_slots" value="54" disabled/>
                                </label>
                                <label className="col-6">
                                    <span className="col-6">Available Parking Slots </span>
                                    <input className="col-3" type="number" name="total_slots" value="10" disabled/>
                                </label>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="card-container-two">
                        <CardContent>
                            <div className="row">
                                <span className="col-3"></span>                          
                                <span className="col-8">Park your Car </span>
                            </div>
                            <div className="button-park">
                                <button className="btn btn-sm btn-success" onClick={submitHandler}>Enter</button>
                            </div>
                        </CardContent>
                    </Card>
                </React.Fragment>
            }
        </div>    
    );
}

HomePage.propTypes = {
    actionSetCarDetails: PropTypes.func.isRequired,
};

const mapDispatchAsProps = dispatch => {
    return {
        actionSetCarDetails: (value) => dispatch(setCarDetails(value)),
    };
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);
 
export default hocChain(HomePage);