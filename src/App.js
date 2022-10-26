import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Index from './pages';
import Auth from './components/Auth/Auth';
import { UserContext } from './hooks/UserContext';
import useFindUser from './hooks/useFindUser';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import MyBlog from './components/MyBlog/MyBlog';
import NewBlog from './components/NewBlog/NewBlog';
import Blog from './components/Blog/Blog';
import Notifications from './components/Notifications/Notification';
import UserProfile from './components/User/Profile';
import Users from './components/Users/Users';
import Groups from './components/Groups/Groups';
import GroupProfile from './components/Group/Group';
import NewPost from './components/NewPost/NewBlog';
import NewGroup from './components/NewGroup/NewBlog';
import MyProjects from './components/MyProjects/MyProjects';
import NewProject from './components/newProject/NewProject';
import MyProject from './components/MyProject/MyProject';
import MyTasks from './components/MyTasks/MyTask';
import { LangContext } from './context/lang';
import { useState } from 'react';

function App() {
  const { user, setUser } = useFindUser();
  const [lang, setLang] = useState('kz');

  return (
    <>
      <Router>
        <LangContext.Provider value={{lang, setLang}}>
        <UserContext.Provider value={{user, setUser}}>
          <Header/>
          <Navbar/>
          {user && <Sidebar/>}
          <Routes>
            <Route exact path='/' element={<Index/>} />
            <Route path='/users' element={<Users/>}/>
            <Route path='/news' element={Navbar} />
            <Route path='/user/:id' element={<UserProfile/>}/>
            <Route path='/myblog' element={<MyBlog/>} />
            <Route path='/myblog/new' element={<NewBlog/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile-edit' element={<ProfileEdit/>} />
            <Route path='/blogs/:id' element={<Blog/>} />
            <Route path='/mypost/:id' element={<NewPost/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/groups' element={<Groups/>} />
            <Route path='/group/:id' element={<GroupProfile/>}/>
            <Route path='/mygroup/new' element={<NewGroup/>} />
            <Route path='/myprojects/:id/new' element={<NewProject/>} />
            <Route path='/myprojects/:id' element={<MyProjects/>}/>
            <Route path='/mytasks' element={<MyTasks/>}/>
            <Route path='/myprojects/:id/:projectID' element={<MyProject/>}/>
          </Routes>
        </UserContext.Provider>
         
        </LangContext.Provider>
      </Router>

    </>
  );
}

export default App;
