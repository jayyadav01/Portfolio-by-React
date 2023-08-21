import React from 'react'

function Contact() {
  return (
    <>
          <div className='contact'>

              <h1>CONTACT</h1>
              <div className='contact_container'>
                <form>
                    <input className='contact_name input_box' type='text' placeholder='Full Name'/>
                    <input className='contact_email input_box' type='text' placeholder='Email'/>
                    <input className='contact_contact input_box' type='text' placeholder='Contact'/>
                    <input className='contact_subject input_box' type='text' placeholder='Subject'/>
                    <textarea className='contact_message input_box' placeholder='Message'></textarea>
                    <div className='submitbox'>
                      <input className='contact_submit' type='submit' value='SUBMIT'/>
                    </div>
                </form>
              </div>

          </div>
    </>
  )
}

export default Contact
