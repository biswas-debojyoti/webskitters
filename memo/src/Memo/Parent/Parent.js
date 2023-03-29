import React from 'react'

export default function Parent() {

  const [ value, setvalue] = useState(100);
 const [func ,setfunc] = useState()
 
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}
