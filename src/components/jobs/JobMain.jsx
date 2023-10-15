import JobFilter from './JobFilter'
import style from './JobMain.module.scss'
import JobList from './JobList'
import { useEffect, useState } from 'react'

const URL = 'https://apimocha.com/mark.test.api/jobs'

const DATA = [
  {
    id: 1,
    name: 'Senior Frontend Developer',
    type: 'Full Time',
    condition: 'USA only',
    company: {
      image: 'https://svgshare.com/i/yGX.svg',
      name: 'Photosnap',
      badges: [
        'NEW!',
        'FEATURED'
      ]
    },
    skills: [
      'Frontend',
      'Senior',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    publishing: {
      time_elapsed: '1d ago'
    }
  },
  {
    id: 2,
    name: 'Fullstack Developer',
    type: 'Part Time',
    region: 'Remote',
    company: {
      image: 'https://svgshare.com/i/yHa.svg',
      name: 'Manage',
      badges: [
        'NEW!',
        'FEATURED'
      ]
    },
    skills: [
      'Fullstack',
      'Midweight',
      'Python',
      'React'
    ],
    publishing: {
      time_elapsed: '1d ago'
    }
  },
  {
    id: 3,
    name: 'Junior Frontend Developer',
    type: 'Part Time',
    region: 'USA only',
    company: {
      image: 'https://svgshare.com/i/yG8.svg',
      name: 'Account',
      badges: [
        'NEW!'
      ]
    },
    skills: [
      'Frontend',
      'Junior',
      'React',
      'Sass',
      'JavaScript'
    ],
    publishing: {
      time_elapsed: '2d ago'
    }
  },
  {
    id: 4,
    name: 'Junior Frontend Developer',
    type: 'Contract',
    region: 'USA only',
    company: {
      image: 'https://svgshare.com/i/yHP.svg',
      name: 'MyHome',
      badges: []
    },
    skills: [
      'Frontend',
      'Junior',
      'CSS',
      'JavaScript'
    ],
    publishing: {
      time_elapsed: '5d ago'
    }
  },
  {
    id: 5,
    name: 'Software Engineer',
    type: 'Full Time',
    region: 'Worldwide',
    company: {
      image: 'https://svgshare.com/i/yG9.svg',
      name: 'Loop Studios',
      badges: []
    },
    skills: [
      'Fullstack',
      'Midweight',
      'JavaScript',
      'Sass',
      'Ruby'
    ],
    publishing: {
      time_elapsed: '1w ago'
    }
  },
  {
    id: 6,
    name: 'Junior Backend Developer',
    type: 'Full Time',
    region: 'UK only',
    company: {
      image: 'https://svgshare.com/i/yHb.svg',
      name: 'Facelt',
      badges: []
    },
    skills: [
      'Backend',
      'Junior',
      'Ruby',
      'RoR'
    ],
    publishing: {
      time_elapsed: '2w ago'
    }
  },
  {
    id: 7,
    name: 'Junior Developer',
    type: 'Full Time',
    region: 'Worldwide',
    company: {
      image: 'https://svgshare.com/i/yGY.svg',
      name: 'Shortly',
      badges: []
    },
    skills: [
      'Fullstack',
      'Junior',
      'HTML',
      'Sass',
      'JavaScript'
    ],
    publishing: {
      time_elapsed: '2w ago'
    }
  },
  {
    id: 8,
    name: 'Junior Frontend Developer',
    type: 'Full Time',
    region: 'USA only',
    company: {
      image: 'https://svgshare.com/i/yHm.svg',
      name: 'Insure',
      badges: []
    },
    skills: [
      'Fullstack',
      'Junior',
      'Vue',
      'JavaScript',
      'Sass'
    ],
    publishing: {
      time_elapsed: '2w ago'
    }
  },
  {
    id: 9,
    name: 'Fullstack Engineer',
    type: 'Full Time',
    region: 'Worldwide',
    company: {
      image: 'https://svgshare.com/i/yGp.svg',
      name: 'Eyecam Co.',
      badges: []
    },
    skills: [
      'Fullstack',
      'Midweight',
      'JavaScript',
      'Django',
      'Python'
    ],
    publishing: {
      time_elapsed: '3w ago'
    }
  },
  {
    id: 10,
    name: 'Front-end Dev',
    type: 'Part Time',
    region: 'Worldwide',
    company: {
      image: 'https://svgshare.com/i/yJC.svg',
      name: 'The Air Filter Company',
      badges: []
    },
    skills: [
      'Frontend',
      'Junior',
      'React',
      'Sass',
      'JavaScript'
    ],
    publishing: {
      time_elapsed: '1mo ago'
    }
  }
]

const SKILLS_DEFAULT = []

const JobMain = () => {
  const [jobs, setJobs] = useState([])
  const [skillsFilter, setSkillsFilter] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        setJobs(data)
      })
      .catch(reason => console.log('An error occurred while fetching data'))
    setJobs(DATA)
  }, [])

  const addFilterHandler = skill => {
    if (skill && skill.target.children.length > 0) return

    const text = skill.target.textContent

    if (skillsFilter.some(item => item === text)) return

    setSkillsFilter(prevSkillsFilter => {
      return [...prevSkillsFilter, text]
    })
  }

  const clearFilterHandler = skill => {
    setSkillsFilter(skillsFilter.filter(item => item !== skill))
  }

  const clearAllFilterHandler = () => {
    setSkillsFilter(SKILLS_DEFAULT)
  }

  const jobsFiltered = skillsFilter.length
    ? jobs.filter(
      item => skillsFilter.every(
        s => item.skills.includes(s)
      )
    )
    : jobs

  const renderJobFilter = skillsFilter.length &&
        <JobFilter skills={skillsFilter}
                   clearFilterHandler={clearFilterHandler}
                   clearAllFilterHandler={clearAllFilterHandler}/>

  return <div className={style['job-main']}>
        {renderJobFilter}
        <JobList jobs={jobsFiltered} addFilterHandler={addFilterHandler}/>
    </div>
}

export default JobMain
