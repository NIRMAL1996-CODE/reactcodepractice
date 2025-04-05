
const EventHandling = () => {
  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
   console.log("Button is clicked", e.currentTarget);
  };
  const handleMouseEnter=(e:React.MouseEvent<HTMLDivElement>)=>{
    console.log("MouseEntered", e.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>Event Handling Example</h1>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  )
}

export default EventHandling;