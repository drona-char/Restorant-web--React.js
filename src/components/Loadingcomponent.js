import React from 'react';

export const Loading = () => {
    return(
        // pulse will rotate it fw- will rotate is forward fa-3x 3 times the speed text primary color will be primary
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};