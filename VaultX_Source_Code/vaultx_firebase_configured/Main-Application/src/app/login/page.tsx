"use client";
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {createUserWithEmailAndPassword,sendPasswordResetEmail,signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth,demoMode} from '@/lib/firebase';
export default function Login(){
 const [mode,setMode]=useState<'login'|'register'|'reset'>('login');const [email,setEmail]=useState('');const [password,setPassword]=useState('');
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState('');const router=useRouter();
 async function submit(e:React.FormEvent){e.preventDefault();const auth=firebaseAuth();if(!auth)return;setBusy(true);setMessage('');try{
 if(mode==='reset'){await sendPasswordResetEmail(auth,email);setMessage('If this address is registered, a password reset email will be sent.');}
 else {if(mode==='register')await createUserWithEmailAndPassword(auth,email,password);else await signInWithEmailAndPassword(auth,email,password);router.push('/portfolios');}
 }catch(err){const code=(err as {code?:string}).code||'';setMessage(code==='auth/invalid-credential'?'Invalid email or password.':code==='auth/email-already-in-use'?'An account already exists for this email.':'Could not complete the request. Check your details and try again.')}finally{setBusy(false)}}
 return <main className="login-bg"><section className="login-card"><Link className="brand" href="/"><span className="brand-icon">V</span><span>VAULT<span className="teal">X</span><small>BY TECH UNITE</small></span></Link><h1>{mode==='register'?'Create an account':mode==='reset'?'Reset password':'Welcome back'}</h1><p className="muted">{demoMode?'Firebase is not configured. Explore the public demo instead.':'Firebase Authentication workspace. All financial data is illustrative.'}</p>
 {demoMode?<Link className="primary" href="/dashboard">Explore public demo</Link>:<form className="form-stack" onSubmit={submit}><label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email"/></label>{mode!=='reset'&&<label>Password<input required minLength={mode==='register'?8:6} type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete={mode==='register'?'new-password':'current-password'}/></label>}{message&&<p role="status" className="muted">{message}</p>}<button className="primary" type="submit" disabled={busy}>{busy?'Processing…':mode==='register'?'Create account':mode==='reset'?'Send reset email':'Sign in'}</button><button className="text-button" type="button" onClick={()=>{setMessage('');setMode(mode==='register'?'login':'register')}}>{mode==='register'?'Already registered? Sign in':'Create an account'}</button><button className="text-button" type="button" onClick={()=>{setMessage('');setMode(mode==='reset'?'login':'reset')}}>{mode==='reset'?'Back to sign in':'Forgot password?'}</button></form>}
 <Link className="back" href="/">← Back to homepage</Link></section></main>;
}
