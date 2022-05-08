import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGroup from '../../hooks/useGroup';
import './MyProject.css';

const MyProject = () => {
    const params = useParams();
    const {getOneGroup, addToDo} = useGroup();
    const [project, setProject] = useState({});
    const [members, setMembers] = useState([]);
    const [assignedTo, setAssignedTo] = useState('');
    const [todos, setTodos] = useState([]);

    const load = async () => {
        const projects = await getOneGroup(params.id); 
        setMembers(projects.members);
        projects.projects.map(i => {
            if(i._id === params.projectID) {
                setProject(i);
                setTodos(i.todos);
            }
        })
    }

    const [name, setName] = useState('');


    const handleAddTodo = async (e) => {
        e.preventDefault();
        try {
            const todo = {
                name : name,
                assignedTo : assignedTo
            }
            const res = await addToDo(params.id, params.projectID, todo);
            todos.push(todo);
            setTodos(todos);
        
        } catch(err) {
            console.log(err);
        }
    }

    const handleSelect = (e) => {
        setAssignedTo(e.target.value);
    }

    useEffect(() => {
        load();
    }, []);

    return(
        <div className='myproject-container'>
            <div className='myproject-data'>
                <div className='myproject-title'>
                        <div className='myproject-title-img'>
                            <img src={project ? project.avatarURL : 'loading...'} />
                        </div>
                        
                        <div className='myproject-title-text'>
                            <h1><span>Жоба аты: </span>{project ? project.name : 'loading...'}</h1>
                            <p><span>Жоба сипаттамасы: </span> <span className='myproject-desc'>
                                {project ? project.desc : 'loading...'}
                                </span>
                            </p>
            
                            <p><span>Аяқталу күні: </span> <input type={'date'} value={project ? project.deadline : ''} readOnly/>
                            </p>
                            <div className='todo-add-container'>
                                <h2>Todo қосу: </h2>
                                <div className='todo-form'>
                                    Todo аты: <input type={'text'} onChange={(e) => {setName(e.target.value)}} /> <br/>
                                
       <br/>                           
       <h3> Бұл тапсырмаға міндетті ерікті: </h3>
       <br/>
       
  <select onChange={handleSelect}>
    <option>Еріктіні таңдау</option>
    {members.map(i => {
        return <option value={`${i._id} - ${i.sname} ${i.fname}`}>{`${i._id} - ${i.sname} ${i.fname}`}</option>
    })}
  </select>
  <br/>
  <input type={'submit'} onClick={handleAddTodo} value={'ToDo қосу'} className='todo-add-btn' />
  <br/>
                                
                                </div>  
                            </div>
                        </div>
                    
                </div>
            </div>
                <div className='myproject-todos'>
                    <h1>ToDo-List <img src={'https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/ToDo_List-128.png'} height={'60px'} width={'60px'} /> </h1>
                    <ul style={{listStyleType:'disk'}}>
                        <br/>
                        <br/>
                        {project && todos && todos.map((i,k) => {
                            return <li>{k + '.'}<h2 style={{
                                color:'white', background:'var(--fourth)', borderRadius:'15px', padding:'15px' 
                            }}>{`ToDo: ${i.name} | Міндетті: ${i.assignedTo[0]}`}</h2></li>
                        })} 
                    </ul>
                </div>
        </div>
    )
}

export default MyProject;
/*
todos : [{
          name : {
              type : String
          },
          assignedTo: [{
            type : String             
          }],
          lvl : {
              type : String
          }
      }],
      finished : {
          type : Boolean,
          default : false
      },
      direction : {
          type : String
      },
      avatarURL : {
          type : String
      }

*/