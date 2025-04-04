import { authenticate } from '../../AuthenticationHelper';
import { showNotification } from '../NotificationHelper';
import './Transfer.css';
import '../Notifications.css'

export default function Transfer() {
    const handleTransfer = () => {
        const senderCardNumber = document.getElementById("sender-card").value;
        const senderCardExpirationDate = document.getElementById("sender-expiry").value;
        const senderCardCVP = document.getElementById("sender-cvp").value;
        const targetCardNumber = document.getElementById("target-card").value;
        const transactionSum = document.getElementById("amount").value;

        const accessToken = localStorage.getItem("access_token");

        if (accessToken == null) {
            authenticate();
            return;
        }

        fetch(`http://localhost:8080/economy/transfer`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': accessToken
            },
            body: JSON.stringify({
                'owned_card_number': senderCardNumber,
                'owned_card_expiration_date': senderCardExpirationDate,
                'owned_card_cvp': senderCardCVP,
                'target_card_number': targetCardNumber,
                'sum': transactionSum,
            })
        })
        .then(response => {
            if (!response.ok) {
                const error = new Error('Недостаточно средств на карте');
                error.maxSum = response.json().allowed_payment_sum;
                throw error;
            }
            return response.json();
        })
        .then(data => {
            showNotification("Перевод выполнен успешно!");
        })
        .catch(error => {
            showNotification("Ошибка перевода : " + error.maxSum);
        });
    }
    return (
        <div className="transfer-wrapper">
            <div className="transfer-container">
                <h2>Перевод средств</h2>
                
                <div className="input-group">
                    <label htmlFor="sender-card">Номер карты отправителя</label>
                    <input
                        id="sender-card"
                        placeholder="2200111122223333"
                        maxLength="16"
                    />
                </div>
                
                <div className="details-row">
                    <div className="input-group">
                        <label htmlFor="sender-expiry">Срок действия</label>
                        <input
                            type="text"
                            id="sender-expiry"
                            placeholder="ММГГ"
                            maxLength="5"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sender-cvp">CVP</label>
                        <input
                            type="password"
                            id="sender-cvp"
                            placeholder="123"
                            maxLength="3"
                        />
                    </div>
                </div>
                
                <div className="input-group">
                    <label htmlFor="target-card">Номер карты получателя</label>
                    <input
                        type="text"
                        id="target-card"
                        placeholder="2200111122223333"
                        maxLength="16"
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="amount">Сумма перевода</label>
                    <input
                        id="amount"
                        placeholder="1000"
                    />
                </div>
                
                <div className="transfer-button-container">
                    <div onClick={handleTransfer} className="transfer-button">Перевести</div>
                </div>
            </div>
            <div id="notifications-container" hidden="true"></div> 
        </div>
    );
};