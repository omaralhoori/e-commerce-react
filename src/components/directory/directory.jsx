import React, { Component } from 'react';
 
import MenuItem from '../menu-item/menu-item'

import './directory.scss'

class Directory extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://media.istockphoto.com/id/855095958/photo/womens-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IU2y7Y7Q0kvAiCv3lxP1peiTkx1-dmp_7yPGSZIozjw=',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }

    
    render() { 
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherProps})=>(
                        <MenuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}
 
export default Directory;