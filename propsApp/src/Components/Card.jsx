import React from 'react'

const Card = (props) => {
  return (
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
      style={{ width: '400px', height: '192px', objectFit: 'cover' }}
      className="w-full" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjYXJkfGVufDB8fHx8MTY5MTQ5MTczNg&ixlib=rb-1.2.1&q=80&w=400" alt="Sample"   />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          This is a simple card component created with Tailwind CSS in a React application. You can add more content here.
        </p> 
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.amount1}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.amount2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.amount3}</span>
      </div>
    </div>
  )
}

export default Card
