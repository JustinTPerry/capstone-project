import { Route, Routes } from "react-router-dom"
import React from "react"
import Card from "./Card"
import Testimonial from "./Testimonial"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import Info from "./Info"

import restaurantFood from "../images/restaurantfood.jpg"
import greekSalad from "../images/greeksalad.jpg"
import bruchetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemondessert.jpg"
import person1 from "../images/person1.jpg"
import person2 from "../images/person2.jpg"
import person3 from "../images/person3.jpg"
import person4 from "../images/person4.jpg"
import marioAndAdrianA from "../images/MarioAndAdrianA.jpg"
import marioAndAdrianB from "../images/MarioAndAdrianB.jpg"

export default function Main() {
    return (
        <main>
            <Hero
                title="Little Lemon"
                subtitle="Chicago"
                description="We are a family owned Mediterannean restaurant, focused on traditional recipes served with a modern twist."
                buttonText="Reserve a Table"
                imgSrc={restaurantFood}
                imgAlt="Server holding a plate with food on it."
            />

            <Specials
                title="Specials"
                buttonText="Online Menu"
            >
                <Card
                    imgSrc={greekSalad}
                    title="Greek salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    imgAlt="A greek salad."
                />
                <Card
                    imgSrc={bruchetta}
                    title="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  "
                    imgAlt="A plate of bruchetta."
                />
                <Card
                    imgSrc={lemonDessert}
                    title="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
                    imgAlt="A lemon dessert."
                />
            </Specials>

            <Testimonials
                title="Testimonials"
            >
                <Testimonial
                    rating="⭐⭐⭐⭐⭐"
                    name="P.J."
                    reviewText="I enjoyed the service and the bruchetta!"
                    imgSrc={person1}
                    imgAlt="A photo of a man"
                />
                <Testimonial
                    rating="⭐⭐⭐⭐"
                    name="Donald R."
                    reviewText="I enjoyed having my birthday here."
                    imgSrc={person2}
                    imgAlt="A photo of a man"
                />
                <Testimonial
                    rating="⭐⭐⭐⭐"
                    name="Mary S."
                    reviewText="My husband brought me here on our anniversary."
                    imgSrc={person3}
                    imgAlt="A photo of a woman"
                />
                <Testimonial
                    rating="⭐⭐⭐⭐⭐"
                    name="Jo"
                    reviewText="Staff treat you like family, I will definitely be back."
                    imgSrc={person4}
                    imgAlt="A photo of a woman"
                />
            </Testimonials>

            <Info
                title="Little Lemon"
                subtitle="Chicago"
                description="Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively, but casual environment.
                The restaurant features a locally-sourced menu with daily specials. Opened in 2019 by friends, Mario and Adrian."
            >
                <section className="info-images">
                    <img src={marioAndAdrianA} alt="Two men working in a kitchen." aria-label="Mario and Adrian, the owners of the Little Lemon Restaurant" />
                    <img src={marioAndAdrianB} alt="Two men working in a kitchen." aria-label="Mario and Adrian, the owners of the Little Lemon Restaurant" />
                </section>
            </Info>

            <Routes>
                <Route path="/"></Route>
                <Route path="/about"></Route>
                <Route path="/menu"></Route>
                <Route path="/reservations"></Route>
                <Route path="/order-online"></Route>
                <Route path="/login"></Route>
            </Routes>
        </main>
    )
}