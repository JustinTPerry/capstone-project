import React from "react"
const Info = props => {
    const { title, subTitle, description, children } = props;
    return (
        <article className="info">
            <section className="info-text">
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <p>{description}</p>
            </section>
            {children}
        </article>
    )
}

export default Info;