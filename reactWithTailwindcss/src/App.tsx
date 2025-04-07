
const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">1. Color</h1>
      <h3 className="text-pink-500 text-3xl text-center">Hello World</h3>
      <br />
      <h1 className="text-4xl font-bold">2. BG Color</h1>
      <h3 className="bg-pink-500 text-white text-3xl text-center">TAILWINDCSS</h3>
      <h3 className="bg-red-300 text-white text-3xl text-center">TAILWINDCSS</h3>
      <br />
      <h1 className="text-4xl font-bold">3. Text Decoration Line</h1>
      <h3 className="underline decoration-red-400 text-3xl text-center">HELLO HELLO</h3>
      <h3 className="line-through decoration-blue-400 text-3xl text-center">HELLO HELLO</h3>
      <h3 className="no-underline text-3xl text-center">HELLO HELLO</h3><br />
      <h3 className="overline decoration-purple-400  text-3xl text-center">HELLO HELLO</h3>
      <br />
      <h1 className="text-4xl font-bold">4.Accent Color</h1>
      {/* Accent color is a highlight color for form controls like checkboxes, radios, sliders.
      It changes the selected color to match your design theme. */}
      <div className="flex gap-4">
      <input type="checkbox" checked className="accent-yellow-500 w-6 h-6"/>
      <input type="checkbox" checked className="accent-red-500 w-6 h-6"/>
      <input type="checkbox" checked className="accent-black-500 w-6 h-6"/>
      <input type="checkbox" checked className="accent-green-500 w-6 h-6"/>
      <input type="checkbox" checked className="accent-purple-500 w-6 h-6"/>
      </div>
      <br />
      <h1 className="text-4xl font-bold">4.Arbitrary Colors</h1>
        {/*Meaning: Use your own custom color (not Tailwind’s default).Arbitrary colors let you use custom HEX, RGB, or HSL values directly in Tailwind classes using square brackets.
          How: Use square brackets with HEX code
          text-[#ff0000] (red text)
          bg-[#00ff00] (green background) */}
       <p className="text-[#ff0000] text-3xl text-center">Tailwindcss</p>
    </div>
  )
}

export default App; 