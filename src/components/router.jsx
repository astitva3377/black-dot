import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './results';

export const Router = () => {
	return (
		<div className='p-4'>
			<Routes>
				<Route exact path='/' element={<Navigate replace to={'/search'} />} />
				<Route exact path='/search' element={<Results />} />
				<Route path='/image' element={<Results />} />
				<Route path='/news' element={<Results />} />
				<Route path='/videos' element={<Results />} />
			</Routes>
		</div>
	);
}
