import React, { useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');
  const [disabled, setDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log('te');
    setError('');
    setSuccess('');
    setLoading(true);
    setDisabled(true);
    try {
      const { data } = await Axios.post('/api/send', {
        name,
        email,
        subject,
        message,
      });
      setSuccess(data.message);
    } catch (err) {
      const errMsg =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      setError(errMsg);
    }
    setLoading(false);
    setDisabled(false);
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>
                  Darmo Baru Barat I 55, Sukomanunggal, East Java, Indonesia
                </p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>billiea48@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>085852329189</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.644995889287!2d112.69703231447617!3d-7.281172373577197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc10ef510dcb%3A0xb9612ec767ad9c3f!2sJl.%20Darmo%20Baru%20Barat%20I%20No.55%2C%20Sonokwijenan%2C%20Kec.%20Sukomanunggal%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060189!5e0!3m2!1sid!2sid!4v1628956601953!5m2!1sid!2sid"
                loading="lazy"
                frameBorder="0"
                title="maps"
                style={{ border: '0', width: '100%', height: '290px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              className="php-email-form"
              onSubmit={submitHandler}
              action="/"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  data-rule="required"
                  data-msg="Please write something for us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="error">{error}</MessageBox>}
                {success && <MessageBox variant="sent">{success}</MessageBox>}
              </div>
              <div className="text-center">
                <button type="submit" disabled={disabled}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
