import { signIn } from '../../AuthenticationHelper';
import { showNotification } from '../NotificationHelper';
import './PrivateCabinetLogin.css';
import '../Notifications.css';

export default function PrivateCabinetLogin() {
    async function handleFunctionalButtonClick() {
        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;
        
        try {
            const success = await signIn(email, password);
            if (success === 0) {
                window.location.href = "/private-cabinet/";
            } else if (success === 401) {
                showNotification("Ошибка: пользователя с такой почтой и паролем не существует.");
            }
        } catch (error) {
            showNotification("Произошла ошибка.");
            console.log(error);
        }
        
        
    }
    return (
        <div className="authorization-wrapper">
            <div className="authorization-container">
                <h1 className="authorization-header">Авторизация</h1>
                <input id="email-input" className="authorization-input authorization-input-email" placeholder='Введите почту' />
                <input id="password-input" type="password" className="authorization-input authorization-input-password" placeholder='Введите пароль' />
                <a href="/private-cabinet/registration" className="go-registration">Нет аккаунта? Зарегистрируйтесь!</a>
                <button className="functional-button authorization-input" onClick={handleFunctionalButtonClick}><p className="functional-button-text">Вход в систему</p></button>
                <div id="notifications-container" hidden="true"></div> 
            </div>
        </div>
    );
}