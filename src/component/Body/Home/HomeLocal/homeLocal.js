import "./homeLocal.css"
import {Link} from 'react-router-dom'

function HomeLocal ({locals}) {
    return(
        <div className="app-container__content">
            <div className="content-local">
                <div className="content-local__header header-border-bottom">
                    <h3 className="content-local__header--text header-border-bottom__text">Nhà hàng</h3>
                </div>

                <ul className="content-local__list">
                    {
                        locals.map((local,index)=>(
                            <li className="content-local__item" key={index}>
                                <div className="content-local__item-link">
                                    <div className="content-local__item-box-img">
                                        <img src={local.src} alt="" className="content-local__item-img"/>
                                    </div>
                                    <div className="content-local__item-content">
                                        <div className="content-local__item-content-header" >
                                            {local.header}
                                        </div>
                                        <div className="content-local__item-content-text">
                                            <p>{local.text}</p>
                                            <p>Hotline: 0123456789</p>
                                        </div>
                                    </div>

                                    <div className="content-local__item-map content-local__item-map--active" >
                                        <iframe src={local.iframe}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default HomeLocal;