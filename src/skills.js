
import "./skills.css";

function Skills() {
    const skills = [
       { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
       { category: "Tools", items: ["Git", "VS Code", "GitHub"] },
       { category: "Concepts", items: ["REST APIs","Responsive Design","DOM Manipulation"] } 
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">

    {skills.map((group, index) => (
        <div className="skill-group" key={index}>
            <h3>{group.category}</h3>
            <div className="skill-tags">
                {group.items.map((skill,i) => (
                    <span className="skill-tag" key={i}>{skill}</span>
                ))}
            </div>
        </div>  
               ))}
            </div>
        </section>
    );} 

export default Skills;

    