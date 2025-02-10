import React from "react";

const Pagination = () => {
    return (
        <>
            <div className ="pagination-container">
                <nav aria-label="Page navigation">
                    <ul className ="pagination">
                        <li className ="page-item disabled">
                            <span className ="page-link" tabIndex="-1" aria-disabled="true">1 of 2</span>
                        </li>
                        <li className ="page-item">
                            <span className ="page-link" ><i className ="fas fa-chevron-left"></i></span>
                        </li>
                        <li className ="page-item">
                            <span className ="page-link" ><i className ="fas fa-chevron-right"></i></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;
