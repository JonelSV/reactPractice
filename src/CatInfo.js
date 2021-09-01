import React, { Component } from 'react';

class CatInfo extends Component {
    render() {
        return (
            <div>

                <h2>{this.props.catbreed}</h2>
              
            </div>
        );
    }
}

export default CatInfo;