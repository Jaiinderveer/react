import React from 'react'

function Card({username = "Jai",btnText = "Read me"}) {
    console.log(username);
    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    
    
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image"/>

    
    <div className="p-5">
      <h5 className="text-xl font-bold tracking-tight text-gray-900">{username}</h5>
      <p className="mt-2 text-gray-600 text-sm">
        This is a simple card component built with Tailwind CSS. You can use it for products, blog posts, or profiles.
      </p>

      
      <a href="#"
         className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
        {btnText}
      </a>
    </div>
  </div>
    )
}

export default Card
