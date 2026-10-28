"use client";
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {onAuthStateChanged,type User} from 'firebase/auth';
import {firebaseAuth,demoMode} from '@/lib/firebase';
type Session={user:User|null;loading:boolean;demo:boolean};
const Context=createContext<Session>({user:null,loading:true,demo:true});
export function AuthProvider({children}:{children:ReactNode}) {const [user,setUser]=useState<User|null>(null);const [loading,setLoading]=useState(!demoMode);useEffect(()=>{const auth=firebaseAuth();if(!auth)return;return onAuthStateChanged(auth,u=>{setUser(u);setLoading(false);},()=>setLoading(false));},[]);return <Context.Provider value={{user,loading,demo:demoMode}}>{children}</Context.Provider>}
export function useSession(){return useContext(Context)}
