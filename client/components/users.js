import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './listItem'
import { allUsersAreSelected } from '../redux/reducers/users'

const Users = () => {
  const dispatch = useDispatch()
  const [allChecked, setAllChecked] = useState(false)
  const users = useSelector((s) => s.users.userList)
  const selected = useSelector((s) => s.users.selected)

  return (
    <div>
      <div className="flex flex-col">
        <table className="min-w-full pt-3 black bg-gray-50 my-8 mx-auto border-gray-200 px-8 border-4 ">
          <thead>
            <tr>
              <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setAllChecked(e.target.checked)
                    dispatch(allUsersAreSelected(e.target.checked, users))
                  }}
                  checked={allChecked}
                />
              </th>
              <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Surname
              </th>
              <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((el) => (
              <ListItem key={el.name} el={el} allChecked={allChecked} />
            ))}
          </tbody>
        </table>
        <div className="inline text-xl">
          <h1> Users: </h1>
          {selected.map((el, i) => (
            <span key={el.id}> {(i ? ', ' : ' ') + el.name} </span>
          ))}
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {}

export default Users
