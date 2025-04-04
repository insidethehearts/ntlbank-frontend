import '../../index.css'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-text">
            Этот сайт является демонстрационным проектом специально для "МАОУ Лицей №38" <a target='_blank' className="footer-link" href='https://ntl38.ru'>https://ntl38.ru</a> и не представляет собой реальный банк или финансовую организацию. 
            <br/>
            Все данные, представленные на сайте, являются вымышленными и созданы исключительно в учебных целях. Не передавайте реальные данные. <a href="#" className="footer-link">Подробнее</a>
            </div>
        </footer>
    )
}