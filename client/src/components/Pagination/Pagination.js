import React from 'react'

const Pagination = ({totalRecords, pageLimit, currentPage, setCurrentPage}) => {
    const totalPages = Math.ceil(totalRecords/pageLimit);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className=" mt-4 py-2 flex justify-center">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    {pageNumbers.map((page, i) => (
                        <li key={`${i+1}-page`}>
                            <button
                            onClick={() => setCurrentPage(page)}
                                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-yellow-500 text-white bg-yellow-200 ${currentPage === page ?'bg-yellow-500':''}`}>
                                {page}
                            </button>
                        </li>
                    ))}
                    
                    
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
