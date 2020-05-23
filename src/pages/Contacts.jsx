import React from 'react';
import styled from 'styled-components';
const Contacts = () => {
  return (
    <Wrapper>
      <Background>
        <div className='dimmer'></div>
      </Background>
      <FormWrapper>
        <Form>
          <input type='email' placeholder='Your Email...' />
          <textarea name='' id='' cols='30' rows='10' placeholder='Your Message  here ... '></textarea>
          <div className='buttonGroup'>
            <button>submit</button>
            <button>Reset</button>
          </div>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;

  position: relative;
`;
const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%, 0% 50%);
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  .dimmer {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
  }
`;
const FormWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  font-size: 1.2rem;
  color: #eee;
  @media only screen and (max-width: 70em) {
    width: 90%;
  }
  input {
    width: 100%;
    color: #eee;
    border: none;
    height: 2rem;
    padding: 1rem;
    background-color: transparent;
    border-bottom: 1px solid #eee;
    margin: 2rem 0;
  }
  textarea {
    width: 100%;
    color: #eee;
    border: none;
    height: 2rem;
    padding: 1rem;
    background-color: transparent;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    height: 15rem;
    margin: 2rem 0;
  }
  .buttonGroup {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 70em) {
      flex-direction: column;
      button {
        margin-top: 0.5rem;
      }
    }
    button {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      border: none;
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }
`;
export default Contacts;
