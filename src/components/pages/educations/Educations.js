import React from 'react';
import { Link } from 'react-router-dom';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Computr Engineering (Islamic Azad University)</td>
								<td>2023</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
