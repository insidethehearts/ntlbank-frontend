import '../../index.css'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
            <div className='header-logo'>
                <a className='header-logo-link' href='/'><img className='header-logo-image' src='/bank-y.png' alt='LOGO'/></a>
            </div>

            <ol className='header-ol'>
                <li className='header-li'><a className='page-button' href='/'>Главная</a></li>
                <li className='header-li'><a className='page-button' href='/products'>Продукты</a></li>
                <li className='header-li'><a className='page-button' href='/money-transfer'>Переводы</a></li>
            </ol>

            <a href="/private-cabinet" className="private-cabinet-button">
                Личный кабинет
                <img className='private-cabinet-icon' src='/people.svg' alt='Тут должно быть изображение' />
            </a>
            </nav>
        </header>
    )
}