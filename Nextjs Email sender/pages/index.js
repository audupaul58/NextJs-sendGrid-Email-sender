import React from 'react'
import {useForm} from 'react-hook-form'
import styles from '../styles/Home.module.scss'
import emailjs from '@emailjs/browser';

const Home = () => {
   
  const {register, handleSubmit, reset} = useForm()

  const submitForm = (formData) => {

    console.log('data', formData)
    emailjs.send('service_374duin', 'template_42si8ev', formData, 'iEIcCZ4ZAd7XdUtiQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      reset()

  } 

  return (
   <main>
    <div className={`container ${styles.main}`}>
       <div className="row">
          <div className="col">
              <div className={styles.content}>
              <h2>Contact Form</h2>
               <form  className={styles.form} role="form" onSubmit={handleSubmit(submitForm)}>

                    <input type="text" placeholder="Sender" name='user_name' {...register('user_name')} className="form-control"  required/>
                    <input type="text" placeholder="email" name='email' {...register('email')} className="form-control" required/>
                    <input type="text" placeholder="subject" name='subject' {...register('subject')} className="form-control" required/>
                    <textarea cols="30" rows="10" className="form-control" name="message" {...register('message')} placeholder="message" required></textarea>
                    <button className={`${styles.button} form-control`}>Send Message</button>

               </form>
              </div>
          </div>

       </div>
       
    </div>
   </main>
  )
} 

export default Home