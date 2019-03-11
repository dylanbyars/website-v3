import React from 'react'
import Markdown from 'react-markdown'

const resume = `
# Dylan Byars

Some kind of an introduction to what I've done and what I'm tryina do.

**Software Engineer**

*[Learning Objects](http://learningobjects.com/)*

Collaborated with a team of engineers to develop a web application to author education content and deliver that content to students via an online learning environment.

Technologies used include React and Angular.js for front end with a Scala backend.

Wrote and maintained reliable automation tests for the entire application, allowing us to continuously push new features to users with less worry that we'd accidentally broken something.

--- 

__JavaScript Developer__

_[MicroHealth LLC](https://www.microhealthllc.com/)_

Supported an application used by Department of Defense and Veterans Affairs officials to coordinated medical care for wounded soldiers.

Created engaging, interactive features and redesigned existing UIs to improve the overall user experience and increase user productivity.

---

__Data Collection Engineer__

_[Leidos](https://www.leidos.com/)_

Designed, constructed, and maintained web crawlers for a project called Digital Echo.

Implemented new techniques to improve the reusability of the code our team used throughout the project.

Selected as the lead for a new project after only 2 months of employment demonstrating an ability to learn new technologies quickly.

---

__Senior Account Manager__

_[Carahsoft Technology](http://carahsoft.com/)_

Introduced technology companies offering innovative cybersecurity solutions to the federal market place, coordinated targeted marketing campaigns, and managed contract negotiations between customers and vendors.

Specialized in encryption technologies, database scanning and remediation tools, threat intelligence managers, and web application firewalls.

---

__Manager | Host | Cook__

_Xenia's_

Opened the restaurant and prepared food for daily service.

Helped organize employee schedules and generally maintain order around the restaurant.

Diced approximately 8 billion tomatoes.

---

__Substitute Teacher__

_Fairfax County Public Schools_

Taught science and math classes for absent teachers.

Developed rapport with students quickly to make lessons interesting.

---

__Game Master | Party Guy__

_Shadowland Laser Adventures_

Supervised teams playing laser tag and helped troubleshoot hardware malfunctions in the arena.

Hosted parties while doling out pizza and cake.

Performed card tricks that were invariably spoiled by some kid about 60% of the way through the act.

---

__Counselor | Medical Director__

_Stone Mountain Adventures_

Taught music workshops and sailing classes for campers.

Led sessions with fellow counselors to demonstrate basic first aid techniques increasing the staff’s ability to manage minor medical traumas and boosting confidence levels.

---

__Groundskeeper__

_Edith J. Carrier Arboretum_

Ran numerous improvement projects around the grounds.
Developed a healthy respect for poison ivy.
`
export default () => <Markdown>{resume}</Markdown>
