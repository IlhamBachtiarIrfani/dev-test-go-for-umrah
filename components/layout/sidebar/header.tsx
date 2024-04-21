'use client'

import Avatar from '@ilhamirfan/components/common/avatar';
import SearchInput from '@ilhamirfan/components/input/searchInput';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import React, { MouseEvent } from 'react'

import BellIcon from '@ilhamirfan/public/icon/bell.svg'
import UserIcon from '@ilhamirfan/public/icon/user.svg'

interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header(props: HeaderProps) {
    const { data } = useSession({
        required: true,
    });

    function handleLogout(e: MouseEvent) {
        e.preventDefault();

        signOut();
    }

    function handleToggleSidebar(e: MouseEvent) {
        e.preventDefault()

        props.onToggleSidebar();
    }

    return (
        <header className='header-container'>
            <div className='d-flex align-items-center gap-4'>
                <div className='d-block d-lg-none'>
                    <button onClick={handleToggleSidebar}>
                        Sidebar
                    </button>
                </div>

                <Avatar title='Big Makkah Hotel' src="/image/background.png">
                    <span>#10292827</span>
                </Avatar>

                <Link href={"#"} className='text-link-primary d-none d-md-block'>See your property</Link>
            </div>

            <div className='d-flex gap-4 align-items-center gap-4'>
                <form className='d-none d-lg-block'>
                    <SearchInput placeholder='Search' name='search' />
                </form>

                <BellIcon />

                <div onClick={handleLogout} className='user-info-container'>
                    <div className='user-avatar'>
                        <UserIcon />
                    </div>
                    <span className='d-none d-sm-block'>
                        {data?.user?.email}
                    </span>
                </div>
            </div>
        </header>
    )
}
