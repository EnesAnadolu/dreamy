"use client"

import  Link  from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { navLinks } from '../../../constants'
import { usePathname } from 'next/navigation'
import { link } from 'fs'
import { Button } from '../ui/button'



const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
           <Link href='/' className='sidebar-logo'>
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
            </Link>

            <nav>
                <SignedIn>
                    <ul>
                        {navLinks.map((navLink) => {
                            const isActive = navLink.route === pathname
                            
                            //create <li>></li> item for each link in navLinks
                            return (
                            <li key={navLink.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                <Link href={navLink.route} className='sidebar-link'>
                                    <Image src={navLink.icon} alt = 'logo' width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                                    {navLink.label}
                                </Link>
                            </li>)
                        })
                        }
                    </ul>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href={"/sign-in"}>Login</Link>
                    </Button>
                    

                </SignedOut>
                
            </nav> 
        </div>
    </aside>
  )
}

export default Sidebar