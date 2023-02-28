import React, { useState } from 'react';
import MainNews from './MainNews';
function MainHome() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <main className='p-2'>
                {/* Mobile */}
                <div className={`px-1 py-1 flex rounded-sm bg-secoundary md:hidden`}>
                    <section onClick={(() => setActiveTab(1))} className={`text-center grow ${activeTab === 1 ? 'bg-white' : 'text-white'} py-2 font-bold rounded-sm cursor-pointer`}>
                        Latest
                    </section>
                    <section onClick={(() => setActiveTab(2))} className={`text-center grow py-2 font-bold ${activeTab === 2 ? 'bg-white' : 'text-white'} rounded-sm cursor-pointer`}>
                        Matches
                    </section>

                </div>
                <MainNews />
                {/* End Mobile */}
            </main>
        </>
    );
}

export default MainHome;