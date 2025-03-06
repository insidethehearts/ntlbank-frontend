import '../../index.css'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
            <div className='header-logo'>
                <a href='#'><img className='header-logo-image' src='./bank-y.png' alt='LOGO'/></a>
            </div>

            <ol>
                <li><a className='page-button' href='#'>Главная</a></li>
                <li><a className='page-button' href='#'>Продукты</a></li>
                <li><a className='page-button' href='#'>Переводы</a></li>
                <li><a className='page-button' href='#'>О проекте</a></li>
            </ol>

            <a href="#" className="private-cabinet-button">
                Личный кабинет
                <img className='private-cabinet-icon' src='./people.svg' alt='Тут должно быть изображение' />
            </a>
            </nav>
        </header>
    )
}