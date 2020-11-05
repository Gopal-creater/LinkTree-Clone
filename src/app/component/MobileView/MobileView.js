import { Link } from 'react-router-dom';
import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from '../MobileView/MobileView.module.css';
import MobileContainer from './MobileContainer/MobileContainer';

const MobileView = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.mobileheader}>
                <span>My Link : <Link to='/mylink' target='_blank'> mylink</Link></span>
                <button className='btn btn-light'>Share</button>
            </div>
            <div className={classes.mobilebody}>
                <MobileContainer/>
            </div>
        </div>
    );
}

export default MobileView;