import { googleAuthProvider } from "../firebase/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startSignInWithEmailAndPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch( startLoading() );
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                    );
                dispatch( finishLoading() );
                })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode , errorMessage);
                dispatch( finishLoading() );
                }
            );
        };
};

export const startRegisterWithNameEmailPassword = ( email, password, name ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( async( {user} ) => {
                await updateProfile( user, { displayName: name } );
                dispatch(
                    login( user.uid, user.displayName )
                );
            }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            }
        );
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) => {
                dispatch(
                    login( user.uid, user.displayName, user.photoURL )
                );
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            });
        }       
};

export const login = ( uid, displayName, photoURL ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL,
        }
    }
};

export const startLogout = () => {
    return async( dispatch ) => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            dispatch( logout() );
        }).catch((error) => {
            
        });
    }
};

const logout = () => {
    return {
        type: types.logout
    }
};
