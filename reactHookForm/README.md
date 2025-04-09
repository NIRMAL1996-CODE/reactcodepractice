## 1. React Hook Form is a library to make working with forms easy in React.
   It helps you make forms (like login, signup) easily and fast, without writing too much code. It also helps check if user input is correct.

## 2. what is useForm()?
  useForm() is like a magic toolbox from React Hook Form.
  It gives you tools to control the form – like getting input values, checking if input is empty, and resetting the form.

## 3. what are the tools does it provides? 
  register – connects input box to form

  handleSubmit – runs when you click submit

  watch – watches input value live

  reset – clears the form

  errors – shows mistakes in input

  setValue – manually set input value

  getValues – get current input values

  trigger – run validation manually

## 4. Difference between isSubmitting in react hook form and Ternary Operator in js?
    1. isSubmitting: A built-in React Hook Form property that tracks the form submission state. It automatically becomes true when the form is submitting and false when it's done.

    2. Ternary Operator (? :): A JavaScript feature that checks a condition and returns one value if true and another if false. It's used for simple conditional rendering.Yes, the ternary operator {isSubmitting ? "Loading..." : "Submit"} works in JavaScript, but you need to define isSubmitting first.
    Example: {isSubmitting ? "Loading..." : "Submit"}  

  