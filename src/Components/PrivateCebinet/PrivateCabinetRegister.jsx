import { signUp } from "../../AuthenticationHelper";
import { showNotification } from '../NotificationHelper';
import './PrivateCabinetRegister.css'
import '../Notifications.css';

export default function PrivateCabinetRegister() {
    async function handleFunctionalButtonClick() {
        const surname = document.getElementById("surname-input").value;
        const name = document.getElementById("name-input").value;
        const patronymic = document.getElementById("patronymic-input").value;
        const email = document.getElementById("email-input").value;
        const phone = document.getElementById("phone-input").value;
        const passportSeries = document.getElementById("passport-series-input").value;
        const passportNumber = document.getElementById("passport-number-input").value;
        const password = document.getElementById("password-input").value;

        try {
            const success = await signUp(surname, name, patronymic, email, phone, passportSeries, passportNumber, password);
            if (success === 0) {
                window.location.href = "/private-cabinet/";
            } else if (success === 400) {
                showNotification("Ошибка: регистрационные данные неверны.");
            } else if (success === 409) {
                showNotification("Ошибка: пользователь с такими данными уже создан.")
            }
        } catch (error) {
            showNotification("Произошла ошибка.");
            console.log(error);
        }
    }
    return (
        <div className="registration-wrapper">
        <div className="registration-container">
            <h1 className="registration-header">Регистрация</h1>
            <input id="surname-input" className="registration-input registration-input-surname" placeholder="Иванов" />
            <input id="name-input" className="registration-input registration-input-name" placeholder="Иван" />
            <input id="patronymic-input" className="registration-input registration-input-patronymic" placeholder="Иванович" />
            <input id="email-input" className="registration-input registration-input-email" placeholder='Введите почту' />
            <input id="phone-input" className="registration-input registration-input-phone" placeholder='99900001234' />
            <input id="passport-series-input" className="registration-input registration-input-passport-series" placeholder="1234" />
            <input id="passport-number-input" className="registration-input registration-input-passport-number" placeholder="123456" />
            <input id="password-input" type="password" className="registration-input registration-input-password" placeholder='Введите пароль' />
            <a href="/private-cabinet/login" className="go-login">Уже есть аккаунт? Аутентифицируйтесь!</a>
            <button className="functional-button registration-input" onClick={handleFunctionalButtonClick}><p className="functional-button-text">Зарегистрироваться</p></button>
            <div id="notifications-container" hidden="true"></div> 
        </div>
    </div>
    )
}