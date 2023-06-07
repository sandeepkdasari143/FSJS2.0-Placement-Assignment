import SandeepImage from '../../assets/SandeepKDasari.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='h-[92vh] basis-[85%] flex items-center justify-center'>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-lg rounded-full object-cover mx-auto" src={SandeepImage} alt="Sandeep K. Dasari" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-800 dark:text-white/80">
              “I am MERN Stack Software Web Developer :)”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sandeep K. Dasari
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            MERN Stack Developer, Bangalore
            </div>
          </figcaption>
          <div className='flex items-center justify-center gap-3'>
            <Link to="https://www.linkedin.com/in/sandeep-js/" target="blank"><IconButton className='text-gray-700 dark:text-white/80'><LinkedInIcon /></IconButton></Link>
            <Link to="https://github.com/sandeepkdasari143" target="blank"><IconButton className='text-gray-700 dark:text-white/80'><GitHubIcon /></IconButton></Link>
            <Link to="mailto:sandeepkumar25820@gmail.com" target="blank"><IconButton className='text-gray-700 dark:text-white/80'><ContactMailIcon /></IconButton></Link>
          </div>
        </div>
      </figure>
    </div>
  )
}

export default Home