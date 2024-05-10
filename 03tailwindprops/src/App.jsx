import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const dogs = [
      {
        name: 'Maxi',
        breed: 'Chaw chaw',
        origin: 'China',
        description: 'Sed augue velit, consequat vel felis sed, tempor fermentum eros. Praesent nec tristique orci. Vivamus finibus ex urna, et eleifend.',
        image: 'https://images.pexels.com/photos/18804664/pexels-photo-18804664/free-photo-of-chow-chow-dog.jpeg?auto=compress&cs=tinysrgb&w=600'   
    },
    {
      name: 'Smarty',
      breed: 'Spitz',
      origin: 'Polland/Germany',
      description: 'Quisque vestibulum velit quis nulla porta, sit amet rutrum nisi aliquet. Duis dictum lacus nec risus varius pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://images.pexels.com/photos/5745209/pexels-photo-5745209.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Milu',
      breed: 'Boxer',
      origin: 'Germany',
      description: 'Vestibulum metus orci, porta eu mi vitae, consequat scelerisque mi. Nam tincidunt, sapien ut lobortis consectetur, erat lorem sagittis est, vel rutrum est dui sit amet felis Orci.',
      image: 'https://images.pexels.com/photos/1294062/pexels-photo-1294062.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]


  const dogCard = dogs.map((dog) => (
    <Card
    name={dog.name}
    breed={dog.breed}
    origin={dog.origin}
    desc={dog.description}
    img={dog.image}
    />
  ))

  return (
    <>
      <h1 className='text-3xl text-white bg-gray-700 p-3 rounded-t-xl mx-auto'>Tailwind & Props</h1>
      {dogCard}
    </>
  )
}

export default App
