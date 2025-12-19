import React, {
    createContext,
    useEffect,
    useState
} from "react"

const storage = localStorage.getItem("user") != 'undefined' && localStorage.getItem("user") != undefined ? JSON.parse(localStorage.getItem("user")) : null;

export const UserContext = createContext();

const UserContextProvider = props => {

    const [userData, setUserData] = useState(storage);
    // console.log(userData)

    const initialise = async () => {
        var theUser = localStorage.getItem('user');


        if (theUser) {
            setUserData(JSON.parse(theUser));
        } else {
            setUserData(null)
        }
    };

    useEffect(() => {
        initialise();
    }, []);

    // console.log('theUser', userData)

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;