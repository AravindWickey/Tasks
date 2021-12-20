import React from 'react';
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
   const {handleSubmit} = props
  
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <Field name="firstName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text"></Field>
                </div>
                <div>
                      <label htmlFor='ratings'>Ratings</label>
                      <Field name="ratings" component="input" type="radio" value="1star"/>1
                      <Field name="ratings" component="input" type="radio" value="2star"/>2
                      <Field name="ratings" component="input" type="radio" value="3star"/>3
                      <Field name="ratings" component="input" type="radio" value="4star"/>4
                      <Field name="ratings" component="input" type="radio" value="5star"/>5
                   </div>
                   <div>
                   <label> comments </label>
                   <Field name="comments" component="textarea" ></Field>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// ContactForm = reduxForm({
//     form: 'contact'
// })(ContactForm)

export default reduxForm({form: 'contact'})(ContactForm);