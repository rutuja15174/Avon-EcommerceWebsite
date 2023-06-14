/** @format */

import React from 'react';
import './Home.css';
export default function Home() {
	return (
		<section>
			<div className='container-'>
				<div className='text-center row  justify-content-center '>
					<div style={{ marginTop: '8%', width: '30%' }}>
						<h2
							className='text-white font-weight-bold'
							style={{ fontSize: '3rem', fontWeight: 'bolder', lineHeight: 1 }}>
							THE SUMMER HYDRATION SHOP
						</h2>
						<h6 className='my-3'>QUENCH THIRSTY SKIN</h6>
						<h6>
							All the beauty essentials to keep you skin hydrated plus New! fmg{' '}
							Glokolor Collections for clean , vegan hydration
						</h6>

						<button className='btn btn-primary mt-2'> Shop Now</button>
					</div>
				</div>
			</div>
		</section>
	);
}
