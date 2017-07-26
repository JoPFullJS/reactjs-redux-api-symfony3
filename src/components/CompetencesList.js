import React from 'react';


const CompetencesList =({competencesList}) => { 
	

		return (
			<div>
				{competencesList.map((competence, index) =>
	            <div key={index}>
	              <span>{competence.description}</span>
            </div>
        )}

			</div>
		);
}


export default CompetencesList;