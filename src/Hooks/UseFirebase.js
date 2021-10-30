import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";


initializeAuthentication();

const UseFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setisLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUsers(result.user)
            })
            .finally(() => setisLoading(false))

    }
    // userstate change 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setisLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setisLoading(false))
    }



    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut

    }
}

export default UseFirebase;