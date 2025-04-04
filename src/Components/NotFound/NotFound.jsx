import '../../index.css'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="not-found">
            <h1 className='not-found-title'>Страница не найдена</h1>
            <p className='not-found-subtitle'>Страницы не существует. Ошибка 404</p>
            <a className='go-main' href="/">На главную</a>
        </div>
    )
}