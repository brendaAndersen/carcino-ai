import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {

    return (<header className="bg-blue-400 fixed top-0 left-0 flex items-center justify-between p-5 w-full h-[60px] dark:bg-gray-900 shadow-lg md:pl-64 z-10">
        {children}
    </header>
    )
}