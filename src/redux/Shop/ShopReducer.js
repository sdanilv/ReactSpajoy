import mass from "../../images/mass.jpg"
import spa from "../../images/spa.jpg"
import salt from "../../images/salt.jpg"
import React from "react";


const initialState = {
    price: {min: 0, max: 1500},
    products: [
        {
        town: "Kiev", gender: "She", category: "Spa",
        price: 600, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa
    },
        {
            town: "Kiev", gender: "She", category: "Massage",
            price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
        },
        {
            town: "Kiev", gender: "He", category: "salt",
            price: 1000, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: salt
        },
        {
            town: "Kiev", gender: "She", category: "Spa",
            price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
        }
        ]
};
const CHANGE_PRICE = "SHOP_CHANGE_PRICE";
const ShopReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CHANGE_PRICE:
            return {...state, price: {min: actions.min, max: actions.max}};
        default:
            return state;
    }
};
const ShopModule = {
    state: {
        price: {min: 0, max: 1500},
        products: [
            {
                town: "Kiev", gender: "She", category: "Spa",
                price: 600, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            },
            {
                town: "Kiev", gender: "She", category: "Massage",
                price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            },
            {
                town: "Kiev", gender: "He", category: "salt",
                price: 1000, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: salt
            },
            {
                town: "Kiev", gender: "She", category: "Spa",
                price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            }
        ]
    },
    reducers: {
        changePrice(state, min, max)  {return {...state, price: { min,  max}}
        }
    },
};
export const changePrice = (min, max) => ({
    type: CHANGE_PRICE,
    min, max
});

export default ShopModule;