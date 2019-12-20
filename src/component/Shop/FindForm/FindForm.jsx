import React, {useEffect, useState} from "react";
import style from "./FindForm.module.scss"
import PriceRangeSlider from "../../../common/PriceRangeSlider/PriceRangeSlider";

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
    const submitForm = formParam =>{
 console.log(formParam)
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
            <div className={style.popupContainer}>
            <button
                onClick={seePriceAreaToggle}
                className={style.priceButton}
                id="price">
                100-1500
            </button>
            {isSeePriceArea &&
            <div id="overlay" className={style.popup} onBlur={seePriceAreaToggle}>
                <div className={style.priceForm}>
                    <PriceRangeSlider onSubmit={submitForm} initialValues={{minSlider: 0, maxSlider: 1500} }/>
                </div>
            </div>
            }
            </div>

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
