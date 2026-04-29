// Prop Validation
import React from "react";
import PropTypes from "prop-types";
function Profile({name,age}){
    return(
        <div className="card">
            <p>Name:{name}</p>
            <p>Age:{age}</p>
        </div>
    );
}
Profile.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
};
export function PropTypesDemo(){
    return(
        <>
          <Profile name="Bindu" age={22} />
        </>
    )
}