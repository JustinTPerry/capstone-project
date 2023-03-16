import React from "react"
const Testimonials = props => {
    const { title, children } = props;
    return (
        <article className="testimonials">
            <h4>{title}</h4>
            <section className="testimonials-wrapper">
                {children}
            </section>
        </article>

    )
}

export default Testimonials;