import React, { useState } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from '../LinkContainer/LinkContainer.module.css';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Switch from "react-switch";
import { IconButton } from '@material-ui/core';

const LinkContainer = (props) =>{

    const [checked,setChecked] = useState(false);

    const [title,setTitle] = useState();
    const [url,setUrl] = useState();

    const titlehandler = (event) =>{
        setTitle(event.target.value);
    }

    const urlhandler = (event) =>{
        setUrl(event.target.value)
    }

    const handleChange = (checked) =>{
        setChecked(checked);
        if(checked){
            props.data(title,url,props.id);
        }
    }

    return(
        <div className={classes.linkcontainer}>
            <div className={classes.drag_drop}>
                <DragIndicatorIcon/>
            </div>
            <div className={classes.link_body}>
                <div className={classes.title}>
                    <input type='text' value={props.title} placeholder='Enter Title' onChange={titlehandler}/>
                    <Switch onChange={handleChange} checked={checked} />
                </div>
                
                <div className={classes.url}>
                    <input type='text' value={props.url} placeholder='Enter Url' onChange={urlhandler}/>
                </div>
                
                <div className={classes.icons}>
                    <IconButton className={classes.iconbtn} onClick={()=>{
                        props.onDelete(props.id)
                    }}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default LinkContainer;