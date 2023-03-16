import React from "react"
const Hero = props => {
    const { imgSrc, imgAlt, title, subTitle, description, buttonText } = props;
    return (
        <article className="hero">
            <section className="hero-body">
                <div>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </div>
                <p>{description}.</p>
                <button>{buttonText}</button>
            </section>
            <section className="image-wrapper">
                <img src={imgSrc} alt={imgAlt} />
            </section>
        </article>
    )
}

export default Hero;