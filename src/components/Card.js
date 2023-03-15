
export default function Card({ imgsrc, title, price, description }) {
    return (
        <section className="card">
            <img src={imgsrc} />
            <section className="card-body">
                <section className="card-text">
                    <section>
                        <h6>{title}</h6>
                        <p id="card-price">{price}</p>
                    </section>
                    <p>{description}</p>
                </section>
                <a className="delivery-button" href="/order">Order a delivery ⛟</a>
            </section>
        </section>
    )
}