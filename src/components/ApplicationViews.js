import React from "react"
import { Route } from "react-router-dom"
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
        </>
    )
}