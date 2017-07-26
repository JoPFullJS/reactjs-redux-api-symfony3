import React from 'react';


const InterventionsList =({interventionsList}) => { 
	

		return (
			<div>
				{interventionsList.map((intervention, index) =>
	            <div key={index}>
	              <span>{intervention.description}</span>
            </div>
        )}

			</div>
		);
}


export default InterventionsList;