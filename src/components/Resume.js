import React from 'react'
import Markdown from 'react-markdown/with-html'

const resume = `
# Dylan Byars

Software Engineer with a focus on front end web application development.

js/ts · html · css/scss · react · angularjs · webpack · scala · selenide · git

---

##### **Software Engineer**
*[Learning Objects](http://learningobjects.com/)*

- Collaborated with a team of engineers to develop a web application used to author education content and deliver that content to students via an online learning environment.
- Wrote and maintained reliable automation tests allowing us to continuously push new features to users with less worry that we'd accidentally broken something.

---

##### **JavaScript Developer**
*[MicroHealth LLC](https://www.microhealthllc.com/)*

- Supported an application used by Department of Defense and Veterans Affairs officials to coordinated medical care for wounded soldiers.
- Created engaging, interactive features and redesigned existing UIs to improve the overall user experience and increase user productivity.

---

##### **Data Collection Engineer**
*[Leidos](https://www.leidos.com/)*

- Designed, constructed, and maintained web crawlers for a project called Digital Echo.
- Implemented new techniques to improve the reusability of the code our team used throughout the project.

---

##### **Senior Account Manager**
*[Carahsoft Technology](http://carahsoft.com/)*

- Introduced technology companies offering innovative cybersecurity solutions to the federal market place, coordinated targeted marketing campaigns, and managed contract negotiations between customers and vendors.
- Specialized in encryption technologies, database scanning and remediation tools, threat intelligence managers, and web application firewalls.

---

##### **Substitute Teacher**
*Fairfax County Public Schools*

- Taught science and math classes for absent teachers.
- Developed rapport with students quickly to make lessons interesting.

---

##### **Manager | Host | Cook**
*Xenia's*

- Opened the restaurant and prepared food for daily service.
- Helped organize employee schedules and generally maintain order around the restaurant.
- Diced approximately 8 billion tomatoes.

---

##### **Counselor | Medic**
*Stone Mountain Adventures*

- Taught music workshops and sailing classes for campers.
- Led sessions with fellow counselors to demonstrate basic first aid techniques increasing the staff’s ability to manage minor medical traumas and boosting confidence levels.

---
`
export default () => (
  <Markdown className="markdown px-3 mx-auto" escapeHtml={false}>
    {resume}
  </Markdown>
)
