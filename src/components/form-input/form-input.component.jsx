import React from "react";

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    
    // otherprops spread include, the props we've passed in the
    // input form, name, type, value, required
    
    // with label prop we'd be selectively rendering a label
    // as we don't know if we need the label or not
    // if we want to generate a label we will
    // if we don't we won't........ Create label component or render Null
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                

                label ? 
                    // Selectively render a string interpellated value
                    // if our class' in, then apply the class of shrink
                    // otherwise it'll be an empty string
                    // and always have form-input-label
                    // add the shrink value once the user types 
           ( <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>           
                        {
                            label 
                            
                        }
            </label>)
            : null
            
            }

        </div>
    )
}


export default FormInput;