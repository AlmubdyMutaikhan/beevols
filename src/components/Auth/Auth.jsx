import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Auth.css';
import Loading from '../Loading/Loading';
import Warning from '../Warning/Warning';

const Auth = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus ] = useState('');
    const [classNames, setClassNames] = useState('sign-container');

    const { signUpUser, signInUser } = useAuth(setLoading, setMessage, setStatus);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ fname, setFName ] = useState('');
    const [sname, setSName ] = useState('');
    
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        await signUpUser({email, fname, sname, password});
      } catch(err) {
        console.log(err);
        setTimeout(clearState, 2000);
      }
    }

    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        await signInUser({email, password});
      } catch(err) {
        console.log(err);
        setTimeout(clearState, 2000);
      }
    }


    const clearState = () => {
      setEmail('');
      setPassword('');
      setFName('');
      setSName('');
      setMessage('');
      setStatus('');
      setLoading(false);
    }

    return(
        <div className={classNames}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleSignUp}>
              <h2 className="title">Порталға тіркелу</h2>
              
              <div className="input-field">
                <i className="fas fa-address-card"></i>
                <input type="text" placeholder="Фамилия..." value={sname} required onChange={(e) => {setSName(e.target.value)}}/>
              </div>

              <div className="input-field">
              <i class="fad fa-address-card"></i>
                <input type="text" placeholder="Аты..." value={fname} required onChange={(e) => {setFName(e.target.value)}}/>
              </div>
              
              <div className="input-field">
                <i className="far fa-at"></i>
                <input type="email" placeholder="Email..." value={email} autoComplete='username' required onChange={(e) => {setEmail(e.target.value)}}/>
              </div>
              
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" autoComplete='current-password' value={password} placeholder="Құпия сөз..."  onChange={(e) => {setPassword(e.target.value)}} required  />
              </div>
              <input type="submit" value="Тіркелу" className="bbtn submit" />
              { loading &&
                <Loading/> 
              }
              <Warning status={status}>
                {message}
              </Warning>
              {status === 'ok' && <Warning status={status}>
                  Қазір басты бетке өтесіз
                </Warning>}
            </form>

            <form action="#" className="sign-up-form" onSubmit={handleSignIn}>
              <h2 className="title">Порталға кіру</h2>
  
              <div className="input-field">
              <i className="far fa-at"></i>
                <input type="email" placeholder="Email"  required 
                autoComplete='username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
                
              </div>
             


              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}autoComplete='current-password' required />
              </div>
              
              <input type="submit" className="bbtn submit" value="Кіру" />
              { loading &&
                <Loading/> 
              }
              <Warning status={status}>
                {message}
              </Warning>
              {status === 'ok' && <Warning status={status}>
                  Қазір басты бетке өтесіз
                </Warning>}
            </form>
          </div>
        </div>
  
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Порталға кіру</h3>
              <p>   
                Егер де сіз бұған дейін тіркеліп, ерікті болсаңыз, онда осы жерге өтіңіз.
              </p>
              <button class="bbtn transparent" id="sign-up-btn" onClick={()=> { setClassNames(prev => prev + ' sign-up-mode');}}>
                Кіру
              </button>
            </div>
            <img src="./log.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Ерікті аккаунты жоқ па?</h3>
              <p>
              Бұл тетікшені басу арқылы сіз еріктілер тіркелу парақшасына өтесіз.
              </p>
              <button class="bbtn transparent" id="sign-in-btn" onClick={()=> { setClassNames(prev => ( prev.includes('sign-up-mode') ? 'sign-container' : prev + ' sign-up-mode'));
            }}>
                Тіркелу
              </button>
            </div>
            <img src="./up.svg" class="image" alt="" />
          </div>
        </div>
      </div>
  
    )
}

export default Auth;