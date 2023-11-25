import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { useContext } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // const [cart] = useCart();

    const handleLogOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Surveys</Link></li>
        <li><Link to="/price">Price</Link></li>
        <li><Link to="/register">Register</Link></li>
        {/* {
            // user ? 'true' : 'false'
            // user ? condition ? 'double true' : 'one true' : 'false'
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        } */}

        {/* <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li> */}

        {
            // user ?
            //     <>
            //         {/* <span> { user?.displayName } </span> */}
            //         <Link onClick={handleLogOut} className="btn btn-ghost btn-sm">Log Out</Link>
            //     </>
            //     :
            //     <>
            //         <li><Link to="/login">Login</Link></li>
            //     </>
        }

    </>

    return (
        <>
            <div className="navbar max-w-screen-xl rounded-b-2xl mx-auto md:fixed md:z-10 bg-opacity-20 bg-black md:text-white font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-200 text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="../../../public/logo.png" alt="" />
                    <Link to="/" className="btn-ghost btn invisible md:visible text-2xl">SurveyMaster Pro</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut}>
                                <p className="text-white"> <span className="font-bold">Logged In:</span> {user?.email}</p>
                                <span className="btn btn-sm text-white btn-outline">Logout</span>
                            </button>
                            : <Link to='/login'>
                                <button className="btn text-white btn-sm btn-outline"> Login </button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;