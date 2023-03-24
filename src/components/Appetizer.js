
const Appetizer = ({title, description, prices}) => {
    return(
        <section className="appetizer">
            <section className="appetizer-body">
                <h5>{title}</h5>
                <p>{description}</p>
            </section>
            <section className="appetizer-prices">
                {prices.map((price, index) => <p key={index}><strong>{price.size}</strong> {price.cost}</p>)}
            </section>
        </section>
        
    )
}

export default Appetizer