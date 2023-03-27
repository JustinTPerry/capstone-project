import MenuItem from "../components/MenuItem"
import "../styles/Menu.css"
import menuData from "../data/menu.json"
const Menu = () => {
    const appetizerData = menuData.appetizers
    const mealData = menuData.meals
    const saladData = menuData.salads
    const dessertData = menuData.desserts
    return(
        <article className="menu">
            <h1>MENU</h1>
            <section className="menu-container">
            <section className="menu-section">
                <h4>Appetizers</h4>
                {appetizerData.map(appetizer => 
                    <MenuItem
                        key={appetizer.title} 
                        title={appetizer.title}
                        description={appetizer.description}
                        prices={appetizer.prices}
                    />)
                }
            </section>
            <section className="menu-section">
                <h4>Meals</h4>
                {mealData.map(meal => 
                    <MenuItem
                        key={meal.title} 
                        title={meal.title}
                        description={meal.description}
                        prices={meal.prices}
                    />)
                }
            </section>
            <section className="menu-section">
                <h4>Salads</h4>
                {saladData.map(salad => 
                    <MenuItem
                        key={salad.title} 
                        title={salad.title}
                        description={salad.description}
                        prices={salad.prices}
                    />)
                }
            </section>
            <section className="menu-section">
                <h4>Desserts</h4>
                {dessertData.map(dessert => 
                    <MenuItem
                        key={dessert.title} 
                        title={dessert.title}
                        description={dessert.description}
                        prices={dessert.prices}
                    />)
                }
            </section>
            </section>
        </article>
    )
}

export default Menu