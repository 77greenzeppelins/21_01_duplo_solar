import React from 'react';
import { useForm } from 'react-hook-form';
//
import {
  contactPageInvitation,
  contactPageForm,
} from '../../assets/dataForArticles/dataForArticles';

//for demo purpose only
// const justFunc = data => console.log('onSubmit', data);

const onSubmit = (data, e) =>
  console.log('onSubmit - data', data, 'onSubmit - event', e);
// const onError = (errors, e) => console.log('onError', errors, e);

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <main className="contact-page">
      <div className="container flex-center-h100 ">
        <div className="contact-container flex-center-h100">
          {/*container for TEXT*/}
          <div className="contact-container__text">
            <article className="text">
              <div className="text__a">
                <p>{contactPageInvitation.ax1}</p>
                <p>{contactPageInvitation.ax2}</p>
              </div>
              {/* <div className="text__b">
                <p>{contactPageInvitation.b1}</p>
                <p>{contactPageInvitation.b2}</p>
                <p>{contactPageInvitation.b3}</p>
                <p>{contactPageInvitation.b4}</p>
                <p>{contactPageInvitation.b5}</p>
              </div>
              <div className="text__c">
                <p></p>
                <p></p>
              </div>
              <div className="text__d">
                <p></p>
                <p></p>
              </div> */}
            </article>
          </div>
          {/*container for FORM*/}
          <div className="contact-container__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form form__email">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={register({
                    required: contactPageForm.requiredEmail,
                    minLength: {
                      value: 5,
                      message: contactPageForm.emailLength,
                    },
                  })}
                />
                {errors.email ? (
                  <div role="alert">{errors.email.message}</div>
                ) : null}
              </div>

              <div className="form form__phone">
                <label htmlFor="phone">phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  ref={register({
                    minLength: {
                      value: 9,
                      message: contactPageForm.numberlength,
                    },
                  })}
                />
                {errors.phone ? (
                  <div role="alert">{errors.phone.message}</div>
                ) : null}
              </div>

              <div className="form form__terms">
                <label htmlFor="terms">RODO</label>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  ref={register({ required: contactPageForm.requiredTerms })}
                />
                {errors.terms ? (
                  <div role="alert">{errors.terms.message}</div>
                ) : null}
              </div>
              <div className="form form__submit">
                <button type="submit">Wyślij</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
