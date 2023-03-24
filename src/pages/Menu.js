import Appetizer from "../components/Appetizer"
import "../styles/Menu.css"
import menuData from "../data/menu.json"
const Menu = () => {
    const appetizerData = menuData.appetizers
    return(
        <article className="menu">
            <h1>MENU</h1>
            <section className="appetizers">
                <h4>Appetizers</h4>
                {appetizerData.map(appetizer => 
                    <Appetizer
                        key={appetizer.title} 
                        title={appetizer.title}
                        description={appetizer.description}
                        prices={appetizer.prices}
                    />)
                }
            </section>
        </article>
    )
}

export default Menu