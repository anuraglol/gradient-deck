import { AiFillGithub } from 'react-icons/ai'

export default function Home(){
  return (
    <div className="w-full p-6 bg-[#020202] text-[#3a0ca3] text-center font-medium text-xl">
     <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl">🌈Gradient Deck</p>
     <span className="mt-2 md:text-2xl">Find Awesome Gradients!!</span>

     <p className='mt-2 text-white flex justify-center'>
     <a href='$' target='_blank'>
      <AiFillGithub size='35'/>
     </a>
    
     </p>
     
    </div>
  )
}