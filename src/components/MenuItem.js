
const MenuItem = ({title, description, prices}) => {
    return(
        <section className="menu-item">
            <section className="menu-item-body">
                <h5>{title}</h5>
                <p>{description}</p>
            </section>
            <section className="menu-item-prices">
                {prices.map((price, index) => <p key={index}><strong>{price.size || ""}</strong> {price.cost}</p>)}
            </section>
        </section>
        
    )
}

export default MenuItem