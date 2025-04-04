import './Products.css'

export default function Products() {
    return (
        <div className="pruducts-page-container">
            <div className="products-about"> 
                <div className="products-about-content">
                    <h1 className="products-about-h1">Оформите прямо сейчас</h1>
                    <p className="products-about-p">Получите карту быстро и удобно — оформите заявку на странице с продуктами. <br/>Это займет всего пару минут! Мы доставим вашу карту уже на следующий день, чтобы вы могли начать пользоваться всеми преимуществами без лишнего ожидания.</p>
                </div>
            </div>
            <div className="products-container">
                <div className="card-container debit-card-container">
                    <div className="card-information debit-card-information">
                        <h1 className="card-information-title debit-card-information-title">Дебетовая карта NTL</h1>
                        <div className="card-information-subtitle debit-card-information-subtitle">
                            <ol className="card-information-ol">
                                <li className="card-information-li">- До 100.000₽ на счету</li>
                                <li className="card-information-li">- Техническая поддержка 24/7</li>
                                <li className="card-information-li">- Бесплатые оповещения по СМС</li>
                                <li className="card-information-li">- Оформление онлайн</li>
                            </ol>
                        </div>
                        <div className="card-information-button debit-card-information-button">
                            <a href="/private-cabinet/" className="card-information-button-link debit-card-information-button-link">Оформить</a>
                        </div>           
                    </div>
                    <div className="card-image first-card-image">
                        <div className="card-image-top first-card-image-top">Дебетовая карта NTL</div>
                        <div className="card-image-mid first-card-image-mid">2222 4444 6666 8888</div>
                        <div className="card-image-prebot first-card-image-prebot">
                            <div className="card-image-date">12/34</div>
                            <div className="card-image-cvv">789</div>
                        </div>
                        <div className="card-image-bot first-card-image-bot">IVAN IVANOV</div>
                    </div>
                </div>
                <div className="card-container credit-card-container">
                    <div className="card-information credit-card-information">
                        <h1 className="card-information-title credit-card-information-title">Кредитная карта NTL</h1>
                        <div className="card-information-subtitle credit-card-information-subtitle">
                            <ol className="card-information-ol">
                                <li className="card-information-li">- Кредитный лимит до 500.000₽</li>
                                <li className="card-information-li">- Выделенная техническая поддержка 24/7</li>
                                <li className="card-information-li">- Бесплатное обслуживание</li>
                                <li className="card-information-li">- Оформление онлайн</li>
                                <li className="card-information-li">- Повышенный кешбэк</li>
                                <li className="card-information-li">- Индивидуальные условия</li>
                                <li className="card-information-li">- Все преимущества дебетовой карты</li>
                            </ol>
                        </div>
                        <div className="card-information-button credit-card-information-button">
                            <a href="/private-cabinet/" className="card-information-button-link credit-card-information-button-link">Оформить</a>
                        </div>           
                    </div>
                    <div className="card-image second-card-image">
                        <div className="card-image-top second-card-image-top">Кредитная карта NTL</div>
                        <div className="card-image-mid second-card-image-mid">3333 5555 7777 9999</div>
                        <div className="card-image-prebot second-card-image-prebot">
                            <div className="card-image-date">12/34</div>
                            <div className="card-image-cvv">542</div>
                        </div>
                        <div className="card-image-bot second-card-image-bot">KIRILL ANDREEV</div>
                    </div>
                </div>
            </div>
        </div>
    )
}