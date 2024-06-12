import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

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
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    );
};

export default Home;