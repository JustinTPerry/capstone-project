import React from "react"
const Hero = props => {
    const { imgSrc, imgAlt, title, subTitle, description, buttonText, navigate } = props;
    return (
        <article className="hero">
            <section className="hero-body">
                <div>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </div>
                <p>{description}.</p>
                <button className="navigation-button" aria-label="On Click" onClick={() => navigate("/reservations")}>{buttonText}</button>
            </section>
            <section className="image-wrapper">
                <img src={imgSrc} alt={imgAlt} />
            </section>
        </article>
    )
}

export default Hero;