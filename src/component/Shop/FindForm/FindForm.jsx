import React, {useEffect, useState} from "react";
import style from "./FindForm.module.scss"

const FindForm = props => {
    const [isSeeChangePrice, seeChangePrice] = useState(false);
    const [isSeeForm, seeForm] = useState(true);
    useEffect(() => {
        if (window.innerWidth < 725)
            seeForm(false)
    }, []);
    const seeFormToggle = () => {
        seeForm(!isSeeForm);
    };
    return (
        <>
           <div className={style.hideButton}>
                <button  type="hideButton" onClick={seeFormToggle}>
                    Знайти
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
                <select>
                    <option selected value="empty">Обрати</option>
                    <option value="Kiev">Київ</option>
                    <option value="Zaporizha">Запоріжжя</option>
                    <option value="Odesa">Одеса</option>
                </select>

                <label>Кому:</label>
                <select>
                    <option selected value="empty">Обрати</option>
                    <option value="She">Для неї</option>
                    <option value="He">Для нього</option>
                    <option value="Three">Для когось</option>
                </select>

                <label>Категорія:</label>
                <select>
                    <option selected value="empty">Обрати</option>
                    <option value="Spa">СПА</option>
                    <option value="Massage">Масаж</option>
                    <option value="Salt">Соляна кімната</option>
                </select>

                <label>Ціна:</label>

                    <button
                        className={style.priceButton}
                        id="price">
                        100-1500
                    </button>
                    <div>
                        {isSeeChangePrice &&
                        <div>
                            <input type="text"/>
                            <div>
                                <input type="text" id="minPrice" value="100"
                                       disabled/>
                                <input type="text" id="maxPrice" value="1500"
                                />
                                <button type="cancel"
                                >Сбросить
                                </button>
                            </div>
                        </div>}

                    </div>
                <div className={style.submitFindFormDiv}>
                    <button className={style.submitFindForm} type="submit">
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

            </div>}
        </>)

};

export default FindForm;
