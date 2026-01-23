1. # Install command:
  npm install react-hook-form

  Meaning:
  npm = package manager (installs tools)

  react-hook-form = form helper package

2. # import { useForm } from "react-hook-form";
Meaning:

useForm = main hook (tool)

Comes from react-hook-form package  

3. # 📘 React Hook Form – useForm Notes (Simple)

---

## ❓ What is a Form?
**Form** = way to **collect user data**  
*(data = information)*

**Examples:**
- Login form
- Signup form
- Contact form

**Real life:**  
Form = question paper 📝

---

## ❓ What is `useForm`?
`useForm` = **helper hook**  
*(helper = makes work easy)*

**Given by:** `react-hook-form`

**Why use it?**
- Manage input values
- Handle validation *(rule checking)*
- Handle errors *(mistakes)*
- Handle submit safely

**Kid line:**  
One bag instead of many bags 🎒

---

## ❓ What problems it solves (vs useState)?
Without `useForm`:
- Many `useState`
- Many `onChange`
- More code

With `useForm`:
- One hook
- Less code
- Easy control

---

## ❓ What is `handleSubmit`?
`handleSubmit` = **function**  
*(function = action)*

**It is:**
- ❌ Not JS keyword  
- ❌ Not browser built-in  
- ✅ Built-in of `useForm`

**What it does:**
- Stops page reload  
- Runs validation  
- Calls your function only if data is correct

**Kid example:**  
Security guard checks first 👮

---

## ❓ Why we pass our function inside `handleSubmit`?
Because:
- It checks rules first
- Calls your function only when all OK

**Meaning:**  
`handleSubmit(yourFn)` = check → then send

---

## ❓ Why browser reloads on submit?
HTML form has **default behavior**  
*(default = automatic)*

Submit → page reloads 🔄

---

## ❓ How `handleSubmit` fixes it?
- Internally uses `preventDefault`
- Stops reload
- Keeps React control

**Same idea as:** `event.preventDefault()`

---

## ❓ What is `register`?
`register` = **function**

**Jobs of register:**
1. Link input to form
2. Track value *(watch input)*
3. Apply validation rules
4. Collect data on submit

**Kid example:**  
School ID card 🎫

---

## ❓ Is `register` only for linking?
❌ No

It does:
- Connect
- Watch
- Validate
- Collect

---

## ❓ Validation rules in `register`
**Validation = rule checking**

Common rules:
- `required` → compulsory
- `minLength` → minimum characters
- `maxLength` → maximum limit
- `pattern` → format rule

**Real life:**  
Password needs 8 letters 🔐

---

## ❓ What is `errors`?
`errors` = **object**  
*(object = box with info)*

**It stores:**
- Input mistakes
- Error messages

**Kid example:**  
Red pen marks ✍️

---

## ❓ One error per input only?
✅ Yes (by default)

**Why?**
- Stops at first failed rule
- Keeps UI clean

**Rule order matters**

---

## ❓ What is `formState`?
`formState` = **status object**

**It contains:**
- `errors`
- `isValid`
- `isSubmitting`
- `isDirty`

**Kid example:**  
Form report card 📄

---

## ❓ Is `formState` compulsory?
❌ No

**Use when:**
- Showing errors
- Checking validity
- Disabling submit button

---



