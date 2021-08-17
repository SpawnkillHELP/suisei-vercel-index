import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import siteConfig from '../config/site.json'

const Navbar = () => {
  return (
    <div className="text-left bg-white p-3 sticky top-0 bg-opacity-80 backdrop-blur-md shadow-sm z-[100]">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl">{siteConfig.title}</h1>
        <a href="https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fas', 'fa-meteor']} size="lg" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
