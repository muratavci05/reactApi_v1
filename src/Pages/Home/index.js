import {useEffect, useState} from 'react'
import useApi from '../../hooks/useApi'
import Category from './components/category'
import {useDispatch, connect} from 'react-redux'
import {setToken} from '../../store/reducers/authReducer'

const Home = (props) => {
  const [categories, setCategories] = useState([])
  console.log('>> HOME COMPONENT CONTENT', props, categories)

  const api = useApi()
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('public/categories/listMainCategories')
      .then((response) => {
        console.log('>> CATEGORY RESP', response)
        setCategories(response.data.data)
      })
      .catch((err) => {

      })
  }, [])

  const onChange = (e) => {
    setToken(dispatch, e.target.value)

    dispatch({
      type: 'set_token',
      payload: {
        token: e.target.value,
        username: null,
        mail: null,
        birthdate: null,
      },
    })
  }

  return (<main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {categories.map((category) => {
        return (
          <Category key={category.id} categoryProp={category} />
        )
      })}
    </div>

  </main>)
}

const mapStateToProps = (state) => {
  console.log('>> HOME MAP STATE', state)

  /*
state değeri:
{
  appDataState: OBJECT,
  authState: OBJECT,
}
   */

  return {
    //...state,
    authState: state.authState,
  }
}

export default connect(mapStateToProps)(Home)
