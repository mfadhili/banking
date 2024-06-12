import React from 'react';
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
    const loggedIn = { firstname: 'Adrian', lastname: 'John', email: 'adrian@gmail.com' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type={"greeting"}
                        title={"Welcome"}
                        user={loggedIn?.firstname || 'Guest'}
                        subtext={"Access and manage your account and transactions effectively"}
                    />
                </header>
            </div>
        </section>
    );
};

export default Home;