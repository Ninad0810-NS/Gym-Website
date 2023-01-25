import React from 'react'

function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder='FULL NAME' required />
                <input type="email" placeholder='TYPE YOUR EMAIL' required />
                <textarea placeholder='WRITE HERE........' name="Message" ></textarea>
                <input type="submit" value='send' />

            </form>

        </div>
    )
}

export default Contact