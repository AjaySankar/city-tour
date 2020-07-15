import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                    <img src="https://images.pexels.com/photos/4816503/pexels-photo-4816503.jpeg" alt="Test image"/>
                    <span className="close-btn">
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>
                        info {" "}
                        <span>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                    <p>
                        Loren ipsum
                    </p>
                </div>        
            </article>
        );
    }
}

export default Tour;