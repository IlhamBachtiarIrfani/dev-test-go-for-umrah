import React from 'react'

import "@ilhamirfan/styles/searchInput.scss" // Import search input styles

import SearchIcon from '@ilhamirfan/public/icon/search.svg' // Import search icon

// Define props interface for SearchInput component
interface SearchInputProps {
    placeholder: string; // Placeholder text for the search input field
    name: string; // Name attribute for the search input field
}

// SearchInput component to render a search input field with search icon
export default function SearchInput(props: SearchInputProps) {
    return (
        <div className='search-input'> {/* Render search input container */}
            <SearchIcon /> {/* Render search icon */}
            <input
                type={'text'} // Set input type as text
                placeholder={props.placeholder} // Set placeholder text
                name={props.name} // Set name attribute
            />
        </div>
    )
}
