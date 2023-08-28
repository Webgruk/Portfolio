import './about.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// import { images } from '../../contants'

// import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { WrapOthers } from '../../Wrapper/AppWrap'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => {
      setAbouts(data)
    })
  }, [])
  return (
    <div className="about">
      <h2 className="head-text">
        Introverted coder: Quiet but passionate about software, speaks through
        <br />
        <span> CODES ! </span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-texts" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// export default AppWrap(About, 'about')

// export default About

export default WrapOthers(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
)
