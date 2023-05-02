import '../App.css';

import Logo from "../images/logo.jpg"

const Header = ({count, setShowCart}) => {
    return (
        <div className='header'>
            <div className='header-logo'><img src={Logo} style={{width: 70}} onClick={()=> setShowCart(false)}/></div>
            <div>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" className='img-cart' onClick={()=> setShowCart(true)}/>
                <span>{count}</span>
            </div>
            
        </div>
    )
}

export default Header