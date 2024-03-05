import './index.css';
import pizzaData from './data.js';

function Pizza(props) {
    return (
        <div className={'pizza'}>
            <img src={props.pizzaObject.photoName} alt={'test'} />
            <div>
                <h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>{props.pizzaObject.price}</span>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
};

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            <ul className={'pizzas'}>
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObject={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    );
};

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen && (
                <div className={'order'}>
                    <p>We're open until {closeHour}:00. Come visit us!</p>
                    <button className={'btn'}>Order</button>
                </div>
            )}
        </footer>
    );
};

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
