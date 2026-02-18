import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ currentPage, hasNext, hasPrev }) {
	return (
		<div className="flex justify-center items-center gap-2 mt-8">
			<Link
				to={`?page=${currentPage - 1}`}
				className={`px-3 py-1 rounded border ${!hasPrev ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'}`}
				aria-disabled={!hasPrev}
			>
				Previous
			</Link>
			<span className="px-3 py-1 font-semibold">{currentPage}</span>
			<Link
				to={`?page=${currentPage + 1}`}
				className={`px-3 py-1 rounded border ${!hasNext ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'}`}
				aria-disabled={!hasNext}
			>
				Next
			</Link>
		</div>
	);
}
