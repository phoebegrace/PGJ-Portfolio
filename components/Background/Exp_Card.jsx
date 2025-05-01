import React from 'react'
import CardLayout from '../Common/CardLayout'
import { useRouter } from 'next/router'

const Exp_Card = ({ data }) => {
    const router = useRouter();

    const handleClick = () => {
        if (data.title === 'Primof Funnel Marketing Solutions Inc.') {
            router.push('/portfolio#primof');
        } else if (data.title.toLowerCase().includes('aespaverse')) {
            router.push('/portfolio#aespaverse');
        }
    };

    return (
        <CardLayout>
            <div onClick={handleClick} className="card_stylings transition px-8 py-10 cursor-pointer">
                <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                    {data.role}
                </div>
                <div className="text-LightGray text-xs opacity-50 font-normal italic">
                    <a href={data.url} target="_blank" rel="noreferrer">
                        {data.url}
                    </a>
                </div>
                <div className="text-LightGray text-sm font-normal mt-4 text-justify">
                    {data.desc}
                </div>
                <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
                    <div>{data.year}</div> <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card
