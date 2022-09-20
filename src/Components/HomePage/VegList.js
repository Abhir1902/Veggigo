import React from 'react'
import '../../style/HomePage/VegList.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const VegList = (props) => {
    const veggies = props.veggies;
    const title = props.title;

    return (
    <div className="Container">
        <h2 className='title'>{title}</h2>
        <div className="sub-container">
            {veggies.map((veggies)=>(
                <div className="vegList">
                    <img src={veggies.VeggieImage}alt="Potato" className='vegimg'/>
                    <div className="vegName" key = {veggies.id}>
                        <h2>{veggies.VeggieName}</h2>
                        <p className="Information"> {veggies.Veggieinfo}</p>
                        <button className='buy-btn'>
                            <p className='buy-now'>Buy now</p>
                            <IconButton>
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </IconButton>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default VegList