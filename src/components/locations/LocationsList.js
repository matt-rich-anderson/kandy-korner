import React, { useEffect, useState } from "react";

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {fetch("http://localhost:8088/locations").then(res => res.json())
                .then((data) => {setLocations(data)})
        },
        []
    )

    return(
        <>
        <h2>Our Locations</h2>
        {locations.map((locationObj) => { return <p key={`location--${locationObj.id}`}>{locationObj.address}</p> 
                }
            )
        }
        </>
    )

}