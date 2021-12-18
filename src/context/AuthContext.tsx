import { createContext, useState, ReactNode, useEffect} from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserInfo } from '@firebase/auth/dist/auth-public';
import Router from 'next/router';
import { app} from '../services/firebase';

type AuthContextType = {
    user: UserInfo | undefined;
    signInWithGoogle: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<UserInfo>()

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setUser(user)
          } else {
            Router.push('/')
          }
        })
        return () => {
          unsubscribe();
        }
      }, [])

    async function signInWithGoogle() {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            setUser(user);
            Router.push('/DashboardAccess')
        }).catch((error) => {
            console.log(error.message)
        })
    }
   
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}
