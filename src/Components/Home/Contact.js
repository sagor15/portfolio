import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('test233', 'template_nqnm8me', form.current, 'FnNDNYdNm0QDUtdzD')
        .then((result) => {
            alert('messege successful');
            
        }, (error) => {
           alert(error.message);
        });
        e.target.reset();
    };

    return (
        <div id='contact'>
            <h1 className='text-3xl font-bold mt-10'>Contact Us</h1>
        <div class="card mb-10 m-auto mt-16 flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
      <div class="card-body">
          <form ref={form} onSubmit={sendEmail}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Eamil</span>
          </label>
          <input name='email' type="email" placeholder="Eamil" class="input input-bordered" />
         
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input name='subject' type="text" placeholder="Subject" class="input input-bordered mb-5" />
         
        </div>
        <div>
        <textarea name='message' class="textarea textarea-bordered w-full h-full" placeholder="Bio"></textarea>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
    </div>
    </div>
  
    );
};

export default Contact;