import 'server-only'
import Input from './Input'

const CoffeeList = async () => {
  const resp = await fetch('https://api.sampleapis.com/coffee/hot')
  const json = await resp.json()

  return (
    <>
      <Input data={json} />
    </>
  )
}

export default CoffeeList
