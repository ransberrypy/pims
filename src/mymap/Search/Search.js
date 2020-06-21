import React, { Component } from 'react';
import SearchCard from './SearchCard';
import SearchBox from './SearchBox'
import {data} from '../../data'


export class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data,
            searchfield:''
        }
        this.onSearchChange=this.onSearchChange.bind(this)
    }

    onSearchChange(event){
        this.setState({searchfield :event.target.value})
    }

	render() {
        const filteredProperty = this.state.data.filter(
            property=>{
                return property.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }
        )
		return (
			<div className='container'>
                <SearchBox onSearchChange={this.onSearchChange}/>
                {filteredProperty.map((property)=>{
                    return <SearchCard
                    key={property.id} 
                    id={property.id} 
                    name={property.name} 
                    location={property.location} 
                    property_type={property.property_type} 

            //         STRUCTURE_: '414.00000000000',
			// PROPERTY_T: 'Residential',
			// ACTIVITY_C: 'Compound House',
			// OWNER_NAME: 'Maa Sarpong',
			// MOBILE_NUM: 544418099,
			// HOUSE_No: 'MKBT242',
			// PROPERTY_R: 50,
			// PAYMENT_TY: 'Yearly'
                    />
                })
                }
			</div>
		);
	}
}

export default Search;
