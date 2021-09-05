import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        alert_message : ' '
      };

      this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
      e.preventDefault();
      var nameValue = document.getElementById('name').value;
      var surnameValue = document.getElementById('surname').value;
      var emailValue = document.getElementById('email').value;
      var messageValue = document.getElementById('message').value;

      var enable = true;
      console.log(window.screen.width);

      if(!nameValue || !surnameValue || !emailValue || !messageValue)enable = false;
      
      if(enable){
        emailjs.sendForm('gmail', 'template_bieej1m', e.target, 'user_IVfFtpH1r79UJwdNuSF33')
        .then((result) => {

                console.log(result.text);
        }, (error) => {

                console.log(error.text);
        });
        this.setState({alert_message : 'success'})
      }
      else{
        this.setState({alert_message : 'error'})
      }
  }
    
  render(){
    return (
        <div>
        <div className = 'bg-color-secundario py-20'>
          <div className = 'container mx-auto h-full flex justify-center font-Catamaran'>
              <div className = ''>
                  <h1 className='text-color-primario text-2xl text-center '>CONTACT</h1>
                  <div className = 'mt-10 text-color-primario px-5'>
                     <form action="" onSubmit={this.sendEmail}>
                        <div className = ''>
                            <div className = ''>
                                <div>
                                    <label className = 'block tracking-wide text-xl mb-2' htmlFor="">Name</label>
                                    <input id = 'name' name = 'from_name' className = 'appearance-none w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>
                            <div className = ''>
                                <div>
                                    <label className = 'block tracking-wide text-xl mb-2' htmlFor="">Surname</label>
                                    <input id = 'surname' name = 'from_surname' className = 'appearance-none w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>

                        </div>
                                                 
                        <div className = 'mt-5'>
                            <label className = 'block tracking-wide text-xl mb-2' htmlFor="">E-mail</label>
                            <input id = 'email' name = 'from_email' className = 'appearance-none w-full  bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-5'>
                            <label className = 'block tracking-wide text-xl  mb-2' htmlFor="">Message</label>
                            <textarea id = 'message' name = 'message' className = 'appearance-none h-48 w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-5 '>  
                            <button class="bg-color-secundario hover:bg-color-primario text-color-primario hover:text-color-secundario w-32 h-8 text-lg border-2 border-color-primario  rounded-full">
                                Send
                            </button>  
                        </div>

                        <div className = 'mt-5'>
                            {this.state.alert_message == 'success' ? <p className = 'text-sm text-green-700'>Message sent correctly</p> : null}
							{this.state.alert_message == 'error' ? <p className = 'text-sm text-red-700'>You must fill all the fields before sending the message</p> : null}    

                        </div>
                     </form>
                  </div>
              </div>
          </div>
  
        </div>
         
      </div>
    );
  }
}

export default Contact;