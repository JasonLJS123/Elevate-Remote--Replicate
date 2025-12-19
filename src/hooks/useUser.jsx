import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        window.localStorage.setItem("user", JSON.stringify(user));
        // console.log('setHereuer',JSON.stringify(user))
    }, [user]);

    const get_user = () => {
        // console.log("GET_USER");
        return user;
    }

    const set_user = (data) => {
        // console.log("IN", data);
        setUser(data);
    }

    return {
        user,
        set_user,
        get_user,
    };
};

export default useUser;
