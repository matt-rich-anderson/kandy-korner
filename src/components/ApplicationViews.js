import React from "react"
import { Route } from "react-router-dom"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeesList } from "./employees/EmployeeList"
import { LocationsList } from "./locations/LocationsList"
import { ProductList } from "./Products/ProductList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationsList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route path="/employees">
                <EmployeesList />
            </Route>
            <Route path="/employees/form">
                <EmployeeForm />
            </Route>
        </>
    )
}