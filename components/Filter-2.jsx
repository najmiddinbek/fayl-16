'use client'

import React, { useState, useEffect } from 'react';

const getTopics = async () => {
    try {
        const res = await fetch('/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

const Filter = () => {
    const [filterValue, setFilterValue] = useState("");
    const [topiclar, setTopiclar] = useState([]);
    const [filteredMavzula, setFilteredMavzula] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const a = await getTopics();
            const topics = a?.topiclar;
            setTopiclar(topics);
            setFilteredMavzula(topics);
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        const filteredArray = topiclar.filter((t) =>
            t.newIsm.toLowerCase().includes(filterValue.toLowerCase()) ||
            t.newSinfi.toLowerCase().includes(filterValue.toLowerCase()) ||
            t.school.toLowerCase().includes(filterValue.toLowerCase())
        );
        setFilteredMavzula(filteredArray);
    };

    const getRowBackgroundColor = (index) => {
        if (index % 2 === 0) {
            return "bg-white";
        } else if (index % 2 === 1) {
            return "gray";
        }
    };

    return (
        <div>
            <div className="flex">
                <div className='mb-4 flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-4xl mt-3 mb-8 font-bold poppins'>Darsga qatnashmagan o`quvchilar</h1>
                    </div>
                    <div className='flex items-center'>
                        <input className='border-2 py-[11px] px-2 w-full' placeholder='Izlash...' type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
                        <button className='green text-white py-3 px-10 button ' onClick={handleFilter}>Izlash</button>
                    </div>

                </div>
            </div>
            <table className="w-full shadow-xl">
                <thead className="green text-white font-bold poppins-2">
                    <tr>
                        <th className="py-5 px-2 poppins-2">№</th>
                        <th className="py-4 px-2 poppins-2">Ism</th>
                        <th className="py-4 px-2 poppins-2">Telefon raqami</th>
                        <th className="py-4 px-2 poppins-2">Maktab</th>
                        <th className="py-4 px-2 poppins-2">Sinf</th>
                        <th className="py-4 px-2 poppins-2">Kiritilgan vaqti</th>
                        <th className="py-4 px-2 poppins-2"></th>
                    </tr>
                </thead>
                {filteredMavzula.map((t, index) => (
                    <tbody key={t.id} className="text-center w-full">
                        <tr className={`${getRowBackgroundColor(index)} w-full`}>
                            <td className="px-2 py-4">{index + 1}</td>
                            <td className='px-2 py-4'>{t.newIsm}</td>
                            <td className="px-2 py-4">{t.telephoneRaqami}</td>
                            <td className="px-2 py-4">{t.school}-maktab</td>
                            <td className="px-2 py-4">{t.newSinfi}-sinf</td>
                            <td className="px-2 py-4">{new Date(t.createdAt).toLocaleString()}</td>
                        </tr>
                    </tbody>
                ))
                }
            </table>
        </div>
    );
};

export default Filter;