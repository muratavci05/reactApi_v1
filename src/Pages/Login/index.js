import {useState} from 'react'
import useApi from '../../hooks/useApi'
import {connect, useDispatch} from 'react-redux'
import {SET_TOKEN} from '../../store/reducers/authReducer'

const Login = (props) => {
  console.log('>> LOGIN PAGE PROPS', props)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const api = useApi()

  const onLoginBtnClick = () => {
    const postData = {
      email, password,
    }
    console.log('>> POST DATA', postData)

    api.post('auth/login', postData)
      .then((response) => {
        console.log('>> RES', response)
        console.log('>> TOKEN', response.data.data.token)

        if (response.data.status === 'success') {
          localStorage.setItem('token', response.data.data.token)

          const action = {
            type: SET_TOKEN,
            payload: {
              token: response.data.data.token,
            },
          }
          props.dispatch(action)

          window.location.href = '/#'
        } else {
          alert('Hatalı eposta veya şifre girildi.')
        }

      })
      .catch((err) => {
        console.log('>> ERR', err)
        alert(err.response.data.errorMessage)
      })

  }

  return (<main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

      <div className="col-12 align-self-center">
        <div className="col-12">
          <label htmlFor="email" className="form-label" style={{fontSize: '20px', fontWeight: 'bold'}}>
            E-mail
          </label>
          <input type="email" className="form-control" placeholder="you@example.com"
                 onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="col-12">
          <label className="form-label">
            Password
          </label>
          <input type="password" className="form-control" placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="col-12">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button"
                    onClick={onLoginBtnClick}>
              Login
            </button>
          </div>
        </div>

      </div>

    </div>

  </main>)
}

const mapStateToProps = (state) => {
  console.log('>> LOGIN MAP STATE', state)

  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Login)
