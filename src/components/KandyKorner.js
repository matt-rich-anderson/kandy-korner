import React from "react";
import { LocationsList } from "./locations/LocationsList";
import { ProductList } from "./Products/ProductList";

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <LocationsList />
        <ProductList />
        </>
    )
}