import { AiFillGithub } from 'react-icons/ai'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full" className={styles.Home}>
    <div className="font-medium">
     <p className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl">🌈Gradient Deck</p>
     <span className="mt-2 md:text-2xl">Find Awesome Gradients!!</span>
 </div>

     <p className='mt-2 text-white flex justify-center'>
     <a href='https://github.com/kr-anurag/gradient-deck' target='_blank'>
      <AiFillGithub size='35'/>
     </a>
     </p>   
    </div>
  )
}