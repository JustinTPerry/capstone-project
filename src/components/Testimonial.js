import React from "react"
const Testimonial = props => {
    const { rating, imgSrc, imgAlt, name, reviewText } = props;
    return (
        <section className="testimonial">
            <p>{rating}</p>
            <section>
                <img src={imgSrc} alt={imgAlt} />
                <p className="testimonial-name">{name}</p>
            </section>
            <p>"{reviewText}"</p>
        </section>
    )
}

export default Testimonial;