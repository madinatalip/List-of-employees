import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Users from './users'
import { getUsers } from '../redux/reducers/users'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div className="container mx-auto">
        <Users />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
