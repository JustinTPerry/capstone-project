import React from "react"
const Specials = props => {
    const { title, buttonText, children, navigate } = props;
    return (
        <article className="specials">
            <section className="specials-header">
                <h4>{title}</h4>
                <button 
                    className="navigation-button" 
                    aria-label="On Click"
                    onClick={() => navigate("/menu")}
                    >{buttonText}</button>
            </section>
            <section className="cards">
                <section className="container">
                    {children}
                </section>
            </section>
        </article>
    )
}

export default Specials;