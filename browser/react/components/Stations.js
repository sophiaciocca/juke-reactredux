import React from 'react';
import {Link} from 'react-router';

const Stations = (props) => {


    console.log("PROPS IN STATION: ", props);

    var stations = Object.keys(props.stations);
    console.log("obj/key stations: ", stations);

    return (
        <div>
            <h3>Stations</h3>
            <div className="list-group">
                {

                   stations.map(station => {
                       return (
                            <div className="list-group-item" key={station}>
                                <Link to={`/stations/${station}`}>{station}</Link>
                            </div>
                        );
                   }) 

                }
            </div>
        </div>
    )
};

export default Stations;
