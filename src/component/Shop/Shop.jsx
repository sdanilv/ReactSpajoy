import React from "react";
import mass from "../../images/mass.jpg"
import spa from "../../images/spa.jpg"
import salt from "../../images/salt.jpg"
import style from "./Shop.module.scss"
import FindForm from "./FindForm/FindForm";
import {connect} from "react-redux"
import PriceRangeSlider from "../../common/PriceRangeSlider/PriceRangeSlider";
import {changePrice} from "../../redux/Shop/ShopReducer";

const Shop = props => {

    const products = props.products.map((product, index) => {
        return <div key={index} className={style.product}>
            <div>
                <div><img src={product.img} alt="Colorlib Template"/></div>
                <div className="text py-3 px-3">
                    <h3>{product.category} послуга в {product.town}</h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p>Опис: Найкраща послуга у вашому місті!</p>
                            <p>Тривалість: {product.duration} година</p>
                            <p className="price">Ціна: {product.price} грн</p>
                        </div>
                    </div>
                    <p className="bottom-area d-flex">
                        <button data-id={product.dataId}
                                type="cart">Додати в кошик
                        </button>
                    </p>
                </div>
            </div>
        </div>
    });
    return <div>
        <FindForm changePrice={props.changePrice} price={props.price}/>
        <div className={style.shop}>
            {products}

            {/*<div className={style.product} town="Kiev"*/}
            {/*     gender="She" category="Spa" price="600">*/}
            {/*    <div>*/}
            {/*        <div><img src={mass} alt="Colorlib Template"/></div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>СПА послуга в Києві</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>300</span> грн</p>*/}
            {/*                </div></div>*/}
            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button></p></div></div></div>*/}

            {/*<div className={style.product} town="Kiev"*/}
            {/*     gender="He" category="Spa" price="600">*/}
            {/*    <div>*/}
            {/*        <div><img src={spa} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>СПА послуга в Києві</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>600</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Kiev"*/}
            {/*     gender="She" category="Massage" price="900">*/}
            {/*    <div>*/}
            {/*        <div><img src={mass} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>Масаж в Києві</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>900</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Kiev"*/}
            {/*     gender="He" category="Massage">*/}
            {/*    <div>*/}
            {/*        <div><img src={mass} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>Масаж в Києві</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна:<span>1200</span>грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Zaporizha"*/}
            {/*     gender="She" category="Spa" price="300">*/}
            {/*    <div>*/}
            {/*        <div><img src={spa} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>СПА послуга в Запоріжжі</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>300</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Zaporizha"*/}
            {/*     gender="She" category="Massage" price="300">*/}
            {/*    <div>*/}
            {/*        <div><img src={mass} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>Масаж в Запоріжжі</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>300</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Zaporizha"*/}
            {/*     gender="He" category="Spa" price="300">*/}
            {/*    <div>*/}
            {/*        <div><img src={spa} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>СПА послуга в Запоріжжі</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>120</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Zaporizha"*/}
            {/*     gender="He" category="Spa" price="300">*/}
            {/*    <div>*/}
            {/*        <div><img src={spa} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>СПА послуга в Запоріжжі</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>120</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={style.product} town="Zaporizha"*/}
            {/*     gender="He" category="Salt" price="300">*/}
            {/*    <div>*/}
            {/*        <div><img src={salt} alt="Colorlib Template"/>*/}
            {/*        </div>*/}
            {/*        <div className="text py-3 px-3">*/}
            {/*            <h3>Соляна кімната в Запоріжжі</h3>*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="pricing">*/}
            {/*                    <p>Опис: Найкраща послуга у вашому місті!</p>*/}
            {/*                    <p>Тривалість: 1 година</p>*/}
            {/*                    <p className="price">Ціна: <span>120</span> грн</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <p className="bottom-area d-flex">*/}
            {/*                <button data-id="5d84a85391d8a57a0e4a5409"*/}
            {/*                        type="cart">Додати в кошик*/}
            {/*                </button>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        <h5>Нічого не знайдено!
            Відповідно до Вашого запиту ми не змогли нічого підібрати.</h5>
        <div id="CartPlace">
            <h4 d="root">Кошик</h4>
            <p className="text-center">Введіть Ваш імейл і оберіть зручний спосіб оплати</p>
            <div id="service"></div>
        </div>
    </div>
};
const mapStateToProps = state => ({products: state.shop.products, price: state.shop.price});
const M = ({shop}) =>({changePrice: (min, max)=>shop.changePrice(min, max) });
export default connect(mapStateToProps, M)(Shop);
