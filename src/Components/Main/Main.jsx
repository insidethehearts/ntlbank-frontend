import './Main.css'

export default function Main() {
    return (
        <div className='blocks-container'>
            <div className="block first-block">
                <h1 className='block-title first-block-title'>Миллионы выбирают нас</h1>
                <p className='block-subtitle first-block-subtitle'>Уже десять лет мы обслуживаем более 5 миллионов клиентов по всей стране!</p>
            </div>
            <div className="block second-block">
                <div className="second-block-content">
                    <h1 className="block-title second-block-title">Оформи карту онлайн</h1>
                    <p className="block-subtitle second-block-subtitle">Получи завтра, пользуйся уже сейчас!</p>
                    <a href="#" className="block-button second-block-button">Оформить</a>
                </div>
                <img className="cards-image" src="./cards-main.png" alt="cards" />
            </div>
            <div className="third-block">
                <div className="third-block-content">
                    <h1 className="block-title third-block-title">Переводы без комиссии</h1>
                    <p className="block-subtitle">Переводите деньги без комиссии — быстро и выгодно! Для клиентов нашего банка переводы между счетами доступны без комиссии через сайт. Просто выберите получателя, укажите сумму, и средства поступят мгновенно. Удобно, безопасно и без лишних затрат!</p>
                    <a href="" className="block-button third-block-button"><div className="third-block-button-text">Попробовать</div></a>
                </div>
                <img className="payment-image" src="./payment.png" alt="payment" />
            </div>
        </div>
    )
}