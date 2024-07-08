'use client'

import useQueryParams from '@/useSearchParamsState'

import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const { setDeleteQueryParams, setQueryParams } = useQueryParams()

  const onChangeEvent = (e: any) => {
    if (e.target.checked) {
      setQueryParams({ param1: '1234' })
    } else {
      setDeleteQueryParams({ param1: '' })
    }
  }

  return (
    <>
      <input type='checkbox' onChange={onChangeEvent} />
      {/* <CoffeeList /> */}
      {/* <Input> */}
    </>
  )
}
