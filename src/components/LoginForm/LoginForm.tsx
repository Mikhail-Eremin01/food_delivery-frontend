import {useState} from 'react';
import{ useAppDispatch } from '../../hook';
import { fetchLogin, fetchRegistration } from '../../store/authorizationSlice';

function LoginForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
        <input 
          onChange={e => {setEmail(e.target.value)}}
          value = {email}
          type = 'text'
          placeholder = 'Email'
        />
        <input 
          onChange={e => {setPassword(e.target.value)}}
          value = {password}
          type = 'password'
          placeholder = 'Password'
        />
        <button onClick={() => dispatch(fetchLogin({email, password}))}>
          Login
        </button>

        <button onClick={() => dispatch(fetchRegistration({email, password}))}>
          Registration
        </button>
    </div>
  )
}

export {LoginForm}