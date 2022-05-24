import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useGroup from '../../hooks/useGroup';
import './Group.css';

const interests = [
    {
        name : 'IT',
        keys: ['айти', 'it', 'programming', 'programing','computer', 'cloud', 'web','dev','design','програ','біл']
    },
    {
        name : 'medicine',
        keys: ['medicine','медицина','health','здоровье','денсаулық', 'әлеумет', 'соц']
    },
    {
        name : 'sport',
        keys: ['sport','спорт','футбол','баскет']
    }
]


const converter = (interest) => {
    let suggestedInterest = ''
    interest = interest.toLowerCase()
    interests.map(i => {
        i.keys.map(j => {
            j = j.toLowerCase()
           // console.log(j, interest)
            if(interest.startsWith(j) || interest === j) {
                suggestedInterest = i.name            
            }
        })
    })

    return suggestedInterest
}


const Groups = () => {
    const { getAllGroups } = useGroup();
    const [groups, setGroups] = useState([]);
    const [groupNames, setGroupNames] = useState([]);
    const [sugList, setSugList] = useState([]);
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();
    const [userInterest, setUserInteres] = useState('');
    const [recGroups, setRecGroups] = useState([])

    const load = async () => {
        try {
            let data = await getAllGroups();
            const user = await isAuthenticated();
            setUserInteres(user.payload.user.major);            

            let groupNamesTemp = data.map((group) => (
                group.name
            ))
            
            setGroupNames(groupNamesTemp)
            setGroups(data);
            recommendedGroups(data, user.payload.user.major)
        } catch(err) {
            console.log(err);
        }
    }

    const recommendedGroups = (groups, interest) => {
        const recomendGroups = []

        groups.map(group => {
            //console.log(group.direction + " " +  interest)
            
            if(converter(group.direction) === converter(interest)) {
                recomendGroups.push(group)        
            }
        })

        setRecGroups(recomendGroups)    
    }

    const handleKeyPress = (e) => { 
        let searchGroup = e.target.value.trim();
        //console.log(searchGroup);
        let tempSuggestionArray = []; // result show to the display
    
        if(searchGroup) {
            tempSuggestionArray = groupNames.filter(g => {
                return g.toLocaleLowerCase().startsWith(searchGroup.toLocaleLowerCase())
            })
        }

        setSugList(tempSuggestionArray);
        /*tempSuggestionArray = tempSuggestionArray.map(value => {
            return <NavLink to={`/pokemons/${value}`} className="item">{value}</NavLink>;
        })
        */
        //setSuggestionArray(tempSuggestionArray);
        
    //    console.log(tempSuggestionArray);

    }



    const lexicoSort = (e) => {
        e.preventDefault();
        
        function merge(left, right) {
            let sortedArr = []; // the sorted elements will go here
          
            while (left.length && right.length) {
              // insert the smallest element to the sortedArr
              if (left[0].name < right[0].name) {
                sortedArr.push(left.shift());
              } else {
                sortedArr.push(right.shift());
              }
            }
          
            // use spread operator and create a new array, combining the three arrays
            return [...sortedArr, ...left, ...right];
          }
          
        
        function mergeSort(arr) {
            const half = arr.length / 2;
          
            // the base case is array length <=1
            if (arr.length <= 1) {
              return arr;
            }
          
            const left = arr.splice(0, half); // the first half of the array
            const right = arr;
            return merge(mergeSort(left), mergeSort(right));
          }

          let arr = mergeSort(groups);
          setGroups(arr);
    }

    useEffect(() => {
        load();
    }, []);

    return(
        <div className="groups-container">
            <div className='group-label'>
                <h1>Ерікті топтары</h1>
                <div className='group-create-container'>
                        <NavLink to={'/mygroup/new'}>
                            Жаңа топ ашу
                        </NavLink>
                </div>
                <div className='group-create-container'>
                        <a href='' onClick={lexicoSort}>
                            A-Z Sorting
                        </a>
                </div>
                <div className='group-create-container'>
                        <a href='' onClick={lexicoSort}>
                            Rank Sorting
                        </a>
                </div>  
                <input type="text" placeholder='Топты іздеу' style={{
                        outline:'none',
                        border:'none',
                        borderBottom:'1px solid #262626',
                        fontSize:'17px'
                    }}
                        onChange={handleKeyPress}
                    />
                </div>
                <div className='suggestionList'>
                    {sugList.map(group => {
                        return <div className='suggestion-item'>
                            <label onClick={() => {
                                navigate('/group/625f87436bf2017e330eb5a9')
                            }}>{group}</label>
                        </div>
                    })}
                    
                </div>
                <div className="groups-card-container">
                {groups.map((group, key) => (
                    <div className="groups-item-container" key={key}>
                        <div className='group-first-part'>
                                <div className='group-item-avatar'>
                                <img src={group.avatarURL} />
                            </div>
                            <div className='group-item-data'>
                                <h2>{group.name}</h2>
                                <p><span>Бағыт: </span>{`${group.direction}`}</p>
                            </div>
                        </div>
                        <div className='group-first-part'>
                            <div className='group-metrics-item'>
                                <i className="fas fa-rocket"></i>
                                <h2>{group.projects.length}</h2>
                                <p>Жобалар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-users"></i>
                                <h2>{group.members.length}</h2>
                                <p>Қатысушылар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-trophy"></i>
                                <h2>{group.members.length}</h2>
                                <p>Жетістіктер</p>
                            </div>

                        </div>
                        <div className='group-first-part'>
                            <NavLink to={'/group/' + group._id}>
                                Профильге өту
                            </NavLink>

                        </div>
                    </div>
                ))}
                
                </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='group-label'>
                <h1>Сізге ұнауы мүмкін:</h1>
            </div>
            <div className="groups-card-container">
                {recGroups.map((group, key) => (
                    <div className="groups-item-container" key={key}>
                        <div className='group-first-part'>
                                <div className='group-item-avatar'>
                                <img src={group.avatarURL} />
                            </div>
                            <div className='group-item-data'>
                                <h2>{group.name}</h2>
                                <p><span>Бағыт: </span>{`${group.direction}`}</p>
                            </div>
                        </div>
                        <div className='group-first-part'>
                            <div className='group-metrics-item'>
                                <i className="fas fa-rocket"></i>
                                <h2>{group.projects.length}</h2>
                                <p>Жобалар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-users"></i>
                                <h2>{group.members.length}</h2>
                                <p>Қатысушылар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-trophy"></i>
                                <h2>{group.members.length}</h2>
                                <p>Жетістіктер</p>
                            </div>

                        </div>
                        <div className='group-first-part'>
                            <NavLink to={'/group/' + group._id}>
                                Профильге өту
                            </NavLink>

                        </div>
                    </div>
                ))}
                
            </div>


        </div>
    )
}

export default Groups;