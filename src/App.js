import React from 'react'
import {
  Routes, Route, HashRouter,
} from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import CategoryDetail from './pages/category_detail'
import {connect, useDispatch} from 'react-redux'
import useApi from './hooks/useApi'
import {REMOVE_APP_DATA, SET_APP_DATA} from './store/reducers/appDataReducer'
import {REMOVE_TOKEN} from './store/reducers/authReducer'

function App(props) {
  // TODO burada appData bilgisini al
  console.log('>> APP COMPONENT PROPS', props)
  const api = useApi()

  // token var, appData yok ise appData bilgisini api'den al
  if (props.authState.token && (!props.appDataState.appData)) {
    api.get('user/appData')
      .then(response => {
        console.log('>> App Data Resp', response)

        const action = {
          type: SET_APP_DATA,
          payload: {
            appData: response.data.data,
          },
        }
        props.dispatch(action)
      })
      .catch(err => {
        console.error('>> APP API ERROR', err)

        if (err.response.data.status === 'error') {
          if (err.response.data.exceptionType === 'UserNotLoggedInException') {
            // bu hatayı aldığımıza göre bizdeki token bilgisi artık invalid

            // Local storage'dan token bilgisini sil
            localStorage.removeItem('token')

            const action = {
              type: REMOVE_TOKEN,
            }
            props.dispatch(action)

            const actionAppData = {
              type: REMOVE_APP_DATA,
            }
            props.dispatch(actionAppData)

            window.location.href = '/#'
          }
        } else {
          // Genel hata mesajı ver
          alert('Genel hata oluştu, lütfen daha sonra tekrar deneyin.')
        }

      })
  }

  return (<div className="container py-3">
    <Header />

    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="category/:slug" element={<CategoryDetail />} />
      </Routes>
    </HashRouter>

    <Footer />
  </div>)
}

const mapProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapProps)(App)
