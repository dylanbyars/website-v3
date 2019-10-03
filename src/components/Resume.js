import React from 'react'
import resume from '../resume'

const Basics = ({ name, email, summary }) => (
  <header>
    <h1 className="text-5xl">{name}</h1>
    <a href={`mailto:${email}`} className="inline-block mt-2">
      {email}
    </a>
    <p className="mt-4">{summary}</p>
  </header>
)

const Skills = ({ skills }) => (
  <ul className="flex flex-wrap justify-center mt-6">
    {skills.map(s => (
      <li className="text-lg mx-4">{s}</li>
    ))}
  </ul>
)

const Job = ({ company, position, website, highlights }) => (
  <article>
    {website ? (
      <a href={website} className="text-2xl underline">
        {company}
      </a>
    ) : (
      <h4 className="text-2xl">{company}</h4>
    )}
    <h5 className="text-lg italic my-4">{position}</h5>
    <ul>
      {highlights.map(h => (
        <li className="mb-4">* {h}</li>
      ))}
    </ul>
  </article>
)

const School = ({ institution, degree }) => (
  <article>
    <h4 className="text-2xl">{institution}</h4>
    <p>{degree}</p>
  </article>
)

const Resume = () => {
  const { basics, skills, work, education } = resume
  return (
    <main className="container mx-auto p-4 font-mono md:px-6 lg:px-56">
      <Basics {...basics} />
      <Skills skills={skills} />
      <br />
      <section>
        {work.map((job, i) => (
          <>
            <Job {...job} />
            {i < work.length - 1 && <br />}
          </>
        ))}
      </section>
      <br />
      <section>
        {education.map(school => (
          <School {...school} />
        ))}
      </section>
      <br />
      <footer>{basics.website}</footer>
    </main>
  )
}

export default Resume
