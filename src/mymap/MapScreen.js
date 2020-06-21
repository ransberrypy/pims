import React, { Component, useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { mapdata } from '../newData';


const TOKEN = 'pk.eyJ1IjoiMW5hYXNlaSIsImEiOiJjazF4bmtwbzAwN2JiM2NsaTB1MThldmJuIn0.QeSib-WujvaF9xSSKZGVAg';

export default function MapScreen() {
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: '100vh',
		longitude: -1.862636,
		latitude: 6.818359,
		zoom: 13
	})

	const [selectedProperty, setSelectedProperty] = useState(null)

	return (
		<div>
			<ReactMapGl
				{...viewport}
				mapboxApiAccessToken={TOKEN}
				mapStyle="mapbox://styles/1naasei/ck7k5fhmp2vpd1pqjesxzj4ju"
				onViewportChange={viewport => {
					setViewport(viewport);
				}}
			>
				{mapdata.map((property) => (
					<Marker
						key={property.properties.Id}
						latitude={property.geometry.coordinates[1]}
						longitude={property.geometry.coordinates[0]}
					>
						<button
							// onClick={this.ButtonSelect}
							onClick={(e) => {
								e.preventDefault();
								setSelectedProperty(property)
							}}
							className="marker-btn">
							<img src='/office-block.svg' alt='building-icon'
							/>
						</button>
					</Marker>
				))}

				{selectedProperty ?
					(<Popup 
					latitude={selectedProperty.geometry.coordinates[1]} 
					longitude={selectedProperty.geometry.coordinates[0]}
					onClose={()=>{setSelectedProperty(null)}}
					>
						<div>
							<h2>{selectedProperty.properties.OWNER_NAME}</h2>
						</div>
					</Popup>) :
					null
				}
			</ReactMapGl>
		</div>
	);
}

//mapbox://styles/1naasei/ck6c52ntg3zb31imgb7xfy7q9

// export class MapScreen extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			viewport: {
// 				width: '100vw',
// 				height: '100vh',
// 				longitude: -1.862636,
// 				latitude: 6.818359,
// 				zoom: 13
// 			},
// 			selectedProperty:null,
// 			setSelectedProperty:null,
// 		};
// 		// this.ButtonSelect = this.ButtonSelect.bind(this)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<ReactMapGl
// 					{...this.state.viewport}
// 					mapboxApiAccessToken={TOKEN}
// 					mapStyle="mapbox://styles/1naasei/ck7k5fhmp2vpd1pqjesxzj4ju"
// 					onViewportChange={(viewport) => this.setState({ viewport })}
// 				>
// 					{mapdata.map((property) => (
// 						<Marker
// 							key={property.properties.Id}
// 							latitude={property.geometry.coordinates[1]}
// 							longitude={property.geometry.coordinates[0]}
// 						>
// 							<button 
// 							// onClick={this.ButtonSelect}
// 							onClick={(e)=>{
// 								e.preventDefault();
// 								{this.state.setSelectedProperty(property)}
// 							}}
// 							className="marker-btn">
// 								<img src='/office-block.svg' alt='building-icon'
// 								/>
// 							</button>
// 						</Marker>
// 					))}
// 				</ReactMapGl>
// 			</div>
// 		);
// 	}
// }

// export default MapScreen;