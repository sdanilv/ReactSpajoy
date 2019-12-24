import mass from "../../images/mass.jpg"
import spa from "../../images/spa.jpg"
import salt from "../../images/salt.jpg"


const initialState = {
    price: {min: 0, max: 1500},
    town: "all",
    gender: "all",
    category: "all",
    products: [
        {
            town: "Kiev", gender: "She", category: "Spa",
            price: 600, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa,
            describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Kiev", gender: "She", category: "Massage",
            price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Kiev", gender: "She", category: "Massage",
            price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Kiev", gender: "She", category: "Massage",
            price: 1100, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Kiev", gender: "He", category: "salt",
            price: 12000, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: salt
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Odessa", gender: "She", category: "Spa",
            price: 100, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Odessa", gender: "He", category: "Spa",
            price: 700, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Odessa", gender: "She", category: "Spa",
            price: 800, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Odessa", gender: "She", category: "Spa",
            price: 1300, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Odessa", gender: "She", category: "Spa",
            price: 1400, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "She", category: "Spa",
            price: 300, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "He", category: "Spa",
            price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "He", category: "Spa",
            price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "He", category: "salt",
            price: 500, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: salt
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "He", category: "Spa",
            price: 400, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Zaporizha", gender: "She", category: "Spa",
            price: 1500, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        }
    ]
};

const ShopModule = {
    state: {...initialState},
    reducers: {
        changePrice: (state, min, max) =>
            ({...state, price: {min, max}}),
        changeViewParameters: (state, town, gender, category) => ({...state, town, gender, category})
    }
};

export default ShopModule;