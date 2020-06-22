import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isSelected } from '../redux/reducers/users'

const ListItem = (props) => {
  const [checked, setChecked] = useState(props.allChecked)
  const dispatch = useDispatch()

  useEffect(() => {
    setChecked(props.allChecked)
  }, [props.allChecked])

  return (
    <tr className="bg-gray-100">
      <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
        <input
          type="checkbox"
          onChange={(e) => dispatch(isSelected(e.target.checked, props.el))}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </td>
      <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
        <b>{props.el.name}</b>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <b>{props.el.surname}</b>
      </td>
      <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
        <b>{props.el.age}</b>
      </td>
    </tr>
  )
}

export default ListItem
