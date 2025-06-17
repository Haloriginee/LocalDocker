import React from 'react'
import { useNavigate } from 'react-router';
import { logoutUser } from '~/appwrite/auth';

const PageLayout = () => {

  const navigate = useNavigate();


  const handleLogout = async () => {

    await logoutUser();
    navigate("/sign-in")

  }

  return (

    <button
      className="cursor-pointer"
      onClick={handleLogout}
    >
      <img
        src="/assets/icons/logout.svg"
        alt="logout"
        className="size-6"
      />
    </button>


  )
}

export default PageLayout


/* <main className='auth'>
   <section className='size-full glassmorphism flex-center px-6'>

     <div className='sign-in-card'>
       <button
         className='button-class !h-11 !w-full cursor-pointer p-18-semibold text-white'
         onClick={() => {navigate("/dashboard")}}
         >
         DashBoard
       </button>
     </div>

   </section>
 </main> */
