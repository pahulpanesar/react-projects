import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Pahul
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Zoe
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:01PM</span>
                    </div>
                    <div className="text">Great stuff!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Yerba
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:04PM</span>
                    </div>
                    <div className="text">who am i?</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));