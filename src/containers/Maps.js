import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import _ from 'lodash'

import { FaSpinner } from 'react-icons/fa'

import { retrieveUser } from '../thunks'
import { GOOGLE_MAPS_KEY } from '../constants/env'

const AsyncGettingStartedExampleGoogleMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class Maps extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			markers: [{
				position: {
					lat: 25.0112183,
					lng: 121.52067570000001,
				},
				key: `Taiwan`,
				defaultAnimation: 2,
			}],
		}
		this.handleMapLoad = this.handleMapLoad.bind(this);
		this.handleMapClick = this.handleMapClick.bind(this);
		this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
	}


  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

	// userLocation() {
	// 	debugger
	// 	if (this.props.contributors.length >= 1) {
	// 		this.props.contributors.forEach((contributor) => {
	// 			this.props.retrieveUser(contributor.login)
	// 		})
	// 	}
	// 	return this.props.locations
	// }

	render() {
		if (this.props.contributors.length > 0) {
			return (
				<AsyncGettingStartedExampleGoogleMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&callback=initMap`}
					loadingElement={
						<div style={{ height: `100%` }}>
						<FaSpinner
						style={{
							display: `block`,
							width: `80px`,
							height: `80px`,
							margin: `150px auto`,
							animation: `fa-spin 2s infinite linear`,
						}}
						/>
						</div>
					}
					containerElement={
						<div style={{width: 800, height: 400}} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					markers={this.state.markers}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			)
		}
		return null
	}
}

export default connect(
	state => {
		return {
			meta: state.app_meta,
			contributors: state.contributors,
			contributorsLocation: state.contributors_info,
			locations: state.locations
		}
	},
	{ retrieveUser }
)(Maps)
