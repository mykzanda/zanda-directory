"use client"

import { useState } from 'react';

interface Option {
    value: string;
    label: string;
    color: string;
}

const FinishGroup = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleChange = (option: string) => {
        setSelectedOption(option);

    };

    const options: Option[] = [
        { value: 'option1', label: 'Option 1', color: 'bg-[#383d4f]' },
        { value: 'option2', label: 'Option 2', color: 'bg-[#000]' },
        { value: 'option3', label: 'Option 3', color: 'bg-[#bab28f]' },
    ];

    return (
        <div className='flex gap-5 items-center'>
            {options.map(option => (
                <div
                    key={option.value}
                    className={`radio-option ${selectedOption === option.label ? 'selected ' : ``} hover:cursor-pointer rounded-full `}
                    onClick={() => handleChange(option.label)}
                >
                    <div className={`h-1 w-1 ${option.color} p-2 rounded-full`}>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default FinishGroup;
