import React, { useEffect, useState } from "react";

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {fetch("http://localhost:8088/employees").then(res => res.json())
                .then((data) => {setEmployees(data)})
        },
        []
    )

    return(
        <>
        <h2>Employees</h2>
        {employees.map((employee) => {
            return  <p key={`employees--${employee.id}`}>
                        {employee.name}
                    </p> 
                }
            )
        }
        </>
    )

}