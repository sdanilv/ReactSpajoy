import React, {useEffect, useState} from "react";
import style from "./FindForm.module.scss"

const FindForm = props => {
    const [isSeePriceArea, seePriceArea] = useState(false);
    const [isSeeForm, seeForm] = useState(true);
    useEffect(() => {
        if (window.innerWidth < 750)
            seeForm(false)
    }, []);

    const seePriceAreaToggle = () => {
        seePriceArea(!isSeePriceArea);
        console.log(isSeePriceArea);
    };
    const seeFormToggle = () => {
        seeForm(!isSeeForm);
    };
    return (<>
        <div className={style.hideButton}>
            <button type="hideButton" onClick={seeFormToggle}>
                {isSeeForm ? "Сховати" : "Знайти"}
            </button>
            <div className={style.cart}>
                <a href="#CartPlace">
                    <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                         alt="cart"/>
                    <span>0</span>
                </a>
            </div>
        </div>
        {isSeeForm && <div className={style.findForm}>
            <label>Місто:</label>
            <select defaultValue="empty">
                <option name="empty" value="empty">Обрати</option>
                <option value="Kiev">Київ</option>
                <option value="Zaporizha">Запоріжжя</option>
                <option value="Odesa">Одеса</option>
            </select>

            <label>Кому:</label>
            <select>
                <option value="empty">Обрати</option>
                <option value="She">Для неї</option>
                <option value="He">Для нього</option>
                <option value="Three">Для когось</option>
            </select>

            <label>Категорія:</label>
            <select>
                <option value="empty">Обрати</option>
                <option value="Spa">СПА</option>
                <option value="Massage">Масаж</option>
                <option value="Salt">Соляна кімната</option>
            </select>

            <label>Ціна:</label>
            {/*<div>*/}
            <button
                onClick={seePriceAreaToggle}
                className={style.priceButton}
                id="price">
                100-1500
            </button>
            {isSeePriceArea &&
            <div id="overlay" className={style.popup}>
                {/*<input type="text"/>*/}
                <div className={style.priceForm}>
                    <div className={style.priceRange}>
                        <input type="range" className={style.maxPriceRange} name="maxPrice" min="1" max="100"/>
                        <input type="range" className={style.minPriceRange} name="minPrice" min="1" max="100"/>
                    </div>
                    <input type="text" className={style.minPriceText} value="100" disabled/>
                    <input type="text" className={style.maxPriceText} value="1500"/>
                    <button type="cancel">
                        Сбросить
                    </button>
                </div>
            </div>
            }
            {/*</div>*/}

            <div className={style.submitFindFormDiv}>
                <button className={style.submitButton} type="submit">
                    Знайти
                </button>
            </div>
            <div className={style.cart}>
                <a href="#CartPlace">
                    <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                         alt="cart"/>
                    <span>0</span>
                </a>
            </div>
        </div>
        }
    </>)

};

export default FindForm;
