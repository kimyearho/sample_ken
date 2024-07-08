'use client'

import { useEffect, useState } from 'react'

const Input = (props: { data: any }) => {
  const [inputState, setInput] = useState('')
  const [chkState, setChk] = useState('N')
  const [item, setItem] = useState('')

  const getData = () => {
    setItem('1')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        <h1>input test</h1>
        <input
          id='counter'
          type='text'
          value={inputState}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(() => e.target.value)
          }
        />
        <input
          type='checkbox'
          value={chkState}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setChk(() => (e.target.value === 'N' ? 'Y' : 'N'))
          }
        />
        <div>
          <h2>result</h2>
          {inputState}
          {item}
          {chkState}
        </div>
        {props.data.map((item: any, index: number) => {
          return <div key={index}>{item.title}</div>
        })}
      </div>
    </>
  )
}

export default Input
