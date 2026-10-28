import type {Metadata} from 'next';import './globals.css';import {AuthProvider} from '@/components/auth-provider';
export const metadata: Metadata={title:'VaultX Ultimate | Tech Unite',description:'Professional portfolio analytics and educational simulation platform'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><AuthProvider>{children}</AuthProvider></body></html>}
