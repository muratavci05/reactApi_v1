import React, {useEffect, useState} from 'react'
import useApi from '../../hooks/useApi'

import {connect} from 'react-redux'

const Header = (props) => {
  console.log('>> Header props:', props)

  const api = useApi()

  const onLogoutBtnClick = () => {
    api.get('auth/logout')
      .then((response) => {
        console.log('>> LOGOUT RESP', response)
      })
      .catch((err) => {
        console.log('>> ERR', err)
      })
      .finally(() => {
        localStorage.removeItem('token')
        window.location.href = '/#'
        setTimeout(() => {
          window.location.reload()
        }, 111)
      })
  }

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="#/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">Api Tutorial</span>
        </a>

        Token: {props.authState.token}

        {props.appDataState.appData ? (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <strong className=" me-3 py-2">
              {props.appDataState.appData.user.fullname}
            </strong>
            <button className="btn btn-primary py-2"
                    onClick={onLogoutBtnClick}>
              Logout
            </button>
          </nav>
        ) : (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="btn btn-primary me-3 py-2" href="#/login">
              Login
            </a>
            <a className="btn btn-primary py-2" href="#/register">
              Register
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

const mapStateToPropsFunc = (state) => {
  console.log('>> MAP STATE', state)

  return {
    ...state,
  }
}

export default connect(mapStateToPropsFunc)(Header)
