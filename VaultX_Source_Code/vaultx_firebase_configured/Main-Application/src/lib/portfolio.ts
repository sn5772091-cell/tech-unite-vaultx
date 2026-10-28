import {collection,addDoc,deleteDoc,doc,getDocs,serverTimestamp,query,orderBy} from 'firebase/firestore';
import {firestoreDb} from './firebase';
import type {Portfolio} from './demo';
import {validatePortfolio} from './validation';
function collectionFor(uid:string) {const db=firestoreDb();if(!db)throw new Error('Firebase is not configured');return collection(db,'users',uid,'portfolios');}
export async function loadPortfolios(uid:string):Promise<Portfolio[]> {const snapshot=await getDocs(query(collectionFor(uid),orderBy('createdAt','desc')));return snapshot.docs.map(d=>({id:d.id,name:String(d.data().name),description:String(d.data().description||'')}));}
export async function createPortfolio(uid:string,name:string,description:string) {const fields=validatePortfolio(name,description);return addDoc(collectionFor(uid),{...fields,createdAt:serverTimestamp()});}
export async function removePortfolio(uid:string,id:string) {const db=firestoreDb();if(!db)throw new Error('Firebase is not configured');return deleteDoc(doc(db,'users',uid,'portfolios',id));}
