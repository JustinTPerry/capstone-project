import restaurantFood from "../images/restaurantfood.jpg"
import greekSalad from "../images/greeksalad.jpg"
import bruchetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemondessert.jpg"
import Card from "./Card"

export default function Main() {
    return (
        <main>
            <article className="hero">
                <section className="hero-body">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <p>We are a family owned Mediterannean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </section>
                <section className="image-wrapper">
                    <img src={restaurantFood} />
                </section>
            </article>

            <article className="specials">
                <section className="specials-header">
                    <h4>Specials</h4>
                    <button>Online Menu</button>
                </section>
                <section className="cards">
                    <Card
                        imgsrc={greekSalad}
                        title="Greek salad"
                        price="$12.99"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    />
                    <Card
                        imgsrc={bruchetta}
                        title="Bruchetta"
                        price="$5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  "
                    />
                    <Card
                        imgsrc={lemonDessert}
                        title="Lemon Dessert"
                        price="$5.00"
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
                    />
                </section>
            </article>

            <article className="testimonials">
                <h4>Testimonials</h4>
            </article>

            <article className="info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </article>
        </main>
    )
}