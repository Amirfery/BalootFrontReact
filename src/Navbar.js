import Button from "./Button";
import Logo from "./Logo";
import Search from "./Search";
import {DataContext} from "./App";
import {useContext} from "react";

function Navbar(props) {
    let {user, setUser} = useContext(DataContext);
    console.log(user)
    return (
        <header>
            <nav className="navbar shadow fixed-top px-3">
                <div className="container-fluid d-flex justify-content-between">
                    <Logo/>
                    {props.search && <Search setState={props.setState}/>}
                    {props.buttons &&
                        <div className="d-flex justify-content-between">
                            <div className="mx-2 d-flex align-items-center">
                                <p className="item-title-text">{user.username}</p>
                            </div>
                            <div className="d-flex justify-content-between mx-2 px-3 py-2 cart-card">
                                <p>Cart</p>
                                <p>{user.buyList.length}</p>
                            </div>
                        </div>
                    }

                </div>
            </nav>
        </header>
    );
}

export default Navbar;
