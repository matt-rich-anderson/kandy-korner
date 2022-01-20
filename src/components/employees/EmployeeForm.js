import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({name: ""})
    const [locations, setLocations] = useState([])

    useEffect(
        () => {fetch("http://localhost:8088/locations").then(res => res.json())
                .then((data) => {setLocations(data)})
        }, []
    )

    // const history = useHistory()

    // const submitEmployee = (evt) => {
        
    //     evt.preventDefault()

    //     const newEmployee = {
    //         name: employee.name,
    //         locationId: ?????????????????????,
    //         manager: ?????????????????????,
    //         fullTime: ?????????????????????,
    //         hourlyPay: ????????????????
    //     }

    //     const fetchOptions = {
    //         method: "POST", 
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(newTicket)
    //     }

    //     return fetch(`http://localhost:8088/serviceTickets`, fetchOptions)
    //         .then(() => {
    //             history.push("/tickets")
    //         })

    // }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(evt) => {
                            const copyState = {...employee}
                            copyState.name = evt.target.value
                            updateEmployee(copyState)
                        } }
                        required autoFocus type="text" className="form-control" placeholder="John Doe"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Select Location:</label>
                    <select name="locations" id="locations"
                        onChange={(evt) => {
                            const copyState = {...employee}
                            copyState.locationId = parseInt(evt.target.value)
                            updateEmployee(copyState)
                            }}>
                        <option>Select an Address</option>       
                        {locations.map((location) => { return <option value={location.id}>{location.address}</option>})}
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Will this Employee be a Manager?</label>
                    <select name="manager" id="manager"
                        onChange={(evt) => {
                            const copyState = {...employee}
                            if (evt.target.value === "true"){
                                copyState.manager = true
                            }
                            else {copyState.manager = false}
                            updateEmployee(copyState)
                            }}
                        >
                            <option>Select an Option</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime">Will this Employee be Fulltime?</label>
                    <select name="fulltime" id="fulltime"
                        onChange={(evt) => {
                            const copyState = {...employee}
                            if (evt.target.value === "true"){
                                copyState.fulltime = true
                            }
                            else {copyState.fulltime = false}
                            updateEmployee(copyState)
                            }}
                        >
                            <option>Select an Option</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}