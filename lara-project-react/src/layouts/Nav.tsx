import { Link, useNavigate } from 'react-router'
import { api } from '../api'

export default function Nav() {
  const navigate = useNavigate();
  const handleLogout = () =>{
    api.post('logout')
    // .then(function (res) {
    //   console.log(res.data);      
    // })
    // .then((res) =>
    //   console.log(res.data)     
    // )
    .then(res => {
      // console.log(res)
      if(res.status == 200){
        localStorage.removeItem('lara_token');
        navigate('/login');
      }
    })
    .catch(err => 
      console.log(err)
    );
  }
  return (
    <>
        <nav className='bg-emerald-200 text-center'>
            <Link to="/" className='py-3 px-4 hover:text-emerald-800 font-bold inline-block'>Home</Link>
            <span> | </span>
            <Link to="/about" className='py-3 px-4 hover:text-emerald-800 font-bold inline-block'>About</Link>
            <span> | </span>
            <Link to="/contact" className='py-3 px-4 hover:text-emerald-800 font-bold inline-block'>Contact</Link>
            <span> | </span>
            <Link to="/users" className='py-3 px-4 hover:text-emerald-800 font-bold inline-block'>Users</Link>
            
            <button type='button' onClick={handleLogout} className='px-3 py-2 ms-3 rounded text-white bg-red-400 hover:bg-rose-800 font-bold inline-block'>Logout</button>
        </nav>
    </>
  )
}
