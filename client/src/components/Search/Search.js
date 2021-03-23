import React from 'react';

const Search = ({ handleFilter, filter, handleSearch, setSearchValue, showDropdown, setShowDropdown}) => {

    return (
        <div className="m-4 flex flex-col justify-center relative">
            <div className="flex flex-row justify-center">
                <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l bg-white" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                <button className="px-8 bg-yellow-300 font-bold p-4 border-yellow-400 border-t border-b border-r" onClick={handleSearch}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="flex align-center px-8 rounded-r-lg bg-blue-400 font-bold p-4 border-blue-500 border-t border-b border-r" onClick={() => { setShowDropdown(prev => !prev) }}>
                    <span>{filter}</span>
                    <svg className="w-4 h-4 pl-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                </button>
            </div>
            {showDropdown && (
                <div className="z-10 absolute w-1/4 top-12 mt-3 self-center overflow-visible rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleFilter('All')}>All</span>
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleFilter('In Progress')}>In Progress</span>
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleFilter('Done')}>Done</span>
                    </div>
                </div>
            )}
        </div>
       )
}

export default Search;
