// the pages that would be shared on all of the pages

import React from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar=()=>{
    return (<div className="bg-White"><div className=" bg-teal-700 flex justify-between items-center py-4 px-6">
      <div> <h1 className="text-4xl font-bold underline text-green-950">
De<span className="text-lime-500">Schol</span>
</h1></div> 
{/* Right side buttons */}
    <div className="flex -space-x-1 justify-end">
        <div className="flex -space-x-6">
      <button className="px-4 py-2 font-bold underline text-lime-500 rounded-lg hover:text-green-950 cursor-pointer">
        Login
      </button>
      <button className="px-4 py-2 font-bold underline text-lime-500 rounded-lg hover:text-green-950 cursor-pointer">
        Register
      </button></div>

      <Popover>
  <PopoverTrigger><Avatar className="cursor-pinter">
  <AvatarImage src="https://github.com/shadcn.png" />
  
</Avatar></PopoverTrigger>
  <PopoverContent className="w-40 bg-white"><Avatar className="cursor-pinter">
  <AvatarImage src="https://github.com/shadcn.png" />
  

  
</Avatar><h4 className="font-bold text-green-950">Nazifa Fairuz Zuthi</h4></PopoverContent>
</Popover>
      
    </div></div>
<div className="bg-teal-400 shadow-sm">
    
  <div className="flex justify-center space-x-8 py-4 text-gray-700 font-medium">
    
    <ul className="flex space-x-8 text-gray-700 font-medium">
      <li className="hover:text-blue-600 cursor-pointer">Home</li>
      <li className="hover:text-blue-600 cursor-pointer">Scholarships</li>
      <li className="hover:text-blue-600 cursor-pointer">Universities</li>
      <li className="hover:text-blue-600 cursor-pointer">About</li>
      <li className="hover:text-blue-600 cursor-pointer">Contact</li>
    </ul>

   
  </div>
  
 
</div>


</div>
    )
}

export default Navbar