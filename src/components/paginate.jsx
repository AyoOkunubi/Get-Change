import React from "react";

const Pagination = () => {
    return (
        <>
            <div className ="pagination-container">
                        <nav aria-label="Page navigation">
                            <ul className ="pagination">
                                <li className ="page-item disabled">
                                    <a className ="page-link" href="#" tabIndex="-1" aria-disabled="true">1 of 2</a>
                                </li>
                                <li className ="page-item">
                                    <a className ="page-link" href="#"><i className ="fas fa-chevron-left"></i></a>
                                </li>
                                <li className ="page-item">
                                    <a className ="page-link" href="#"><i className ="fas fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
        </>
    );
};

export default Pagination;
