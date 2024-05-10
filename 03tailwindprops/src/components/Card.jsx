import React from 'react'

const Card = ({ name = 'dog', breed = 'unknown', origin = 'country', desc = ' ', img = 'no image' }) => {
  return (
    <figure className="custom-fig flex bg-slate-100 p-3 dark:bg-slate-800">
        <img className=" h-48 w-1/6 rounded-lg mx-auto" src={img} alt="" width="384" height="512" />
        <div className="pt-5 space-y-5 w-5/6">
            <blockquote>
            <p className="text-lg font-medium">
                “ {desc} ”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-xl text-sky-600 dark:text-sky-400">
                {name}
            </div>
            <div className="text-slat text-lg">
                {breed}, {origin}
            </div>
            </figcaption>
        </div>
    </figure>
  )
}

export default Card
