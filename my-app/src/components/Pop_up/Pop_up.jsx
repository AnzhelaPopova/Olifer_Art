import React from 'react';
import './Pop_up.scss';
// import { Link } from "react-router-dom";

const PopUp = ({ show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}

            </section>


        </div>
    );
};

export default PopUp;
