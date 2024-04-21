import Image from 'next/image'
import React from 'react'

interface AvatarProps {
    title: string;
    src: string;
    children?: React.ReactNode;
}

export default function Avatar(props: AvatarProps) {
    return (
        <div className='avatar-container'>
            <Image src={props.src} width={48} height={48} alt='avatar' className='image' />
            <div>
                <p className='title'>{props.title}</p>
                <div className='children-container'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
