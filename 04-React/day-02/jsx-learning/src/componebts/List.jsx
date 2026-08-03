function List()
{
    const skills =["html","Css","js","node.js"];
    return(
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    );
}
export default List;