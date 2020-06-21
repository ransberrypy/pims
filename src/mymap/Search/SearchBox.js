import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        return (
            <div className="form-group search-box">
                <input type="search" 
                placeholder='Search Properties' 
                className="form-control form-control-success"
                onChange={this.props.onSearchChange}
                />
            </div>      
        )
    }
}
export default SearchBox
