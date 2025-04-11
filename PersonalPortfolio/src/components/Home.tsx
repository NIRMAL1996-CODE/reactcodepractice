const Home = () => {
  return (
    <div className="relative">
    <img className="w-full h-auto " src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="homepage"/>
      <div className="absolute top-2 m-4 text-black text-2xl w-[600px] h-[650px] bg-black/5 p-4">
         <h1 className="font-bold text-3xl  font-serif">Welcome!</h1>
         <img className="size-[300px]" src="https://images.icon-icons.com/3150/PNG/512/user_profile_female_icon_192701.png" alt="profile" />
         <p className="font-medium font-serif">Im Nirmal, a Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I specialize in building responsive, user-friendly web interfaces and continuously enhance my skills through real-world projects.
         </p>
      </div>
    </div>
  )
};
export default Home;