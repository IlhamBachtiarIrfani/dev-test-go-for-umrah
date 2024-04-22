import Image from 'next/image'
import React from 'react'

// AvatarProps interface to define the props for the Avatar component
interface AvatarProps {
    title: string;          // The title or name associated with the avatar
    src: string;            // The image source URL for the avatar
    children?: React.ReactNode;  // Optional additional content to be rendered below the title
}

// Avatar component to display an avatar with title and optional additional content
export default function Avatar(props: AvatarProps) {
    return (
        <div className='avatar-container'>
            {/* Render the image using the Next.js Image component */}
            <Image src={props.src} width={96} height={96} alt='avatar' className='image' />
            <div>
                {/* Render the title */}
                <p className='title'>{props.title}</p>
                {/* Render additional content if provided */}
                <div className='children-container'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
