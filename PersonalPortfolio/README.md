 ## Create a IconComponent Using React Icons
Install react-icons if you haven’t already:

1. npm install react-icons(in terminal)

Create a new file called IconComponent.jsx.

Inside this file, create a functional component called IconComponent.

Import an icon from react-icons, such as FaBeer from react-icons/fa.


2. Render All Components in App.jsx
In your App.jsx file, import the StyledCard, ProfileCard, and IconComponent components:

import StyledCard from "./StyledCard";
import ProfileCard from "./ProfileCard";
import IconComponent from "./IconComponent";
Inside the App component, render all three components:

function App() {
  return (
    <div>
      <StyledCard />
      <ProfileCard />
      <IconComponent />
    </div>
  );
}

export default App;