'use client'

import Avatar from '@ilhamirfan/components/common/avatar';
import SearchInput from '@ilhamirfan/components/input/searchInput';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import React, { MouseEvent } from 'react'

import bellIcon from '@ilhamirfan/public/icon/bell.svg'
import userIcon from '@ilhamirfan/public/icon/user.svg'

export default function Header() {
    const { data } = useSession({
        required: true,
    });

    function handleLogout(e: MouseEvent) {
        e.preventDefault();

        signOut();
    }
    return (
        <header className='header-container'>
            <div className='d-flex align-items-center gap-4'>
                <Avatar title='Big Makkah Hotel' src="/image/background.png">
                    <span>#10292827</span>
                </Avatar>

                <Link href={"#"} className='text-link-primary'>See your property</Link>
            </div>

            <div className='d-flex gap-4 align-items-center gap-4'>
                <form>
                    <SearchInput placeholder='Search' name='search' />
                </form>

                <Image src={bellIcon} alt='bell-icon' />

                <div onClick={handleLogout} className='user-info-container'>
                    <div className='user-avatar'>
                        <Image src={userIcon} alt='user-icon' />
                    </div>
                    <span>
                        {data?.user?.email}
                    </span>
                </div>
            </div>
        </header>
    )
}
