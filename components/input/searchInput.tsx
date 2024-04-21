'use client'

import React, { ChangeEvent, useState } from 'react'

import "@ilhamirfan/styles/searchInput.scss"
import Image from 'next/image';

import searchIcon from '@ilhamirfan/public/icon/search.svg'

interface SearchInputProps {
    placeholder: string;
    name: string;
}

export default function SearchInput(props: SearchInputProps) {
    return (
        <div className='search-input'>
            <Image src={searchIcon} alt='search-icon' />
            <input
                type={'text'}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    )
}
