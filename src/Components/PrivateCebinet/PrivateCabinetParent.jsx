import { getCards } from "../../AuthenticationHelper";
import CardBlock from "./CardBlock";
import './PrivateCabinetParent.css'
import './CardOrderBlock.css';
import React, { useState, useEffect } from 'react';
import { showNotification } from "../NotificationHelper";

const PrivateCabinetParent = () => {
    const [cardsData, setCardsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getCards();
                setCardsData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div>Загрузка..</div>;
    if (error) return <div>Ошибка: {error}</div>;

    function orderDebit() {
        fetch(`http://localhost:8080/cards/order`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'X-Access-Token': localStorage.getItem("access_token")
            },
            body: JSON.stringify({
                'card_type': "DEBIT"
            })
        }).then(response => {
            if (!response.ok) {
                showNotification(`Произошла ошибка: ${response.status}`);
            } else {
                window.location.reload();
            }
        })
    }

    function orderCredit() {
        fetch(`http://localhost:8080/cards/order`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'X-Access-Token': localStorage.getItem("access_token")
            },
            body: JSON.stringify({
                'card_type': "CREDIT"
            })
        }).then(response => {
            if (!response.ok) {
                showNotification(`Произошла ошибка: ${response.status}`);
            } else {
                window.location.reload();
            }
        })
    }

    return (
        <>
            <div className="card-order-block-wrapper">
            <div className="card-order-block">
                <h2 className="ordercard-h2">Оформление карты</h2>
                <div className="order-container">
                    <button className="order-card order-debit" onClick={orderDebit}>Оформить дебетовую карту</button>
                    <button className="order-card order-credit" onClick={orderCredit}>Оформить кредитную карту</button>
                </div>
            </div>
            </div>
            <div className="cards-wrapper">
                <div className="cards-container">
                    <h2 className="yourcards-h2">Ваши карты</h2>
                    <div className="cards-grid">
                        {cardsData?.cards?.length ? (
                            cardsData.cards.map((card, index) => (
                                <CardBlock key={index} card={card} />
                            ))
                        ) : (
                            <div>У Вас нет карт</div>
                        )}
                    </div>
                </div>
            </div>
            <div id="notifications-container" hidden="true"></div> 
        </>
    )
};

export default PrivateCabinetParent;