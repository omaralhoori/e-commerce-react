import React from 'react';
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrenUser} from '../../redux/user/user.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>

                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGIN OUT</div>
                        :
                        (<Link className='option' to='/signin'>
                            SIGIN IN
                        </Link>)
                }
                <CartIcon /> 
            </div>
            {
                hidden ? null :
                <CartDropdown />
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrenUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);