// import { useState } from "react";
// import  { useForm } from './Hooks/useForm'

// const loginForm = () => {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [form, setForm] = useState ({email:"", senha:""})
    // const [form, onChange] = useForm ({email:"", senha:""})
    // const changeEmail = (event) => {
    //     setForm({...form, email: event.target.value})
    // }

    // const changePassword = (event) => {
    //     setForm({...form, password: event.target.value})
    // }

    // const onChange = (event) => {
    //     const { name, value } = event.target
        
    //     setForm({...form, [name]: value})
    // }



//     const body = {
//         "email": email,
//         "password": password
//     }
    
//     const fazerLogin = (event) => {
//        event.preventDefault()
//     }


//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={fazerLogin}>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     name="email"
//                     id="email"
//                     placeholder="email"
//                     value={form.email}
//                     onChange={onChange}
//                     type="email"
//                     required
//                 />
//                 <label htmlFor="senha">Senha:</label>
//                 <input
//                     name="senha"
//                     id="senha"
//                     placeholder="senha"
//                     value={form.senha}
//                     onChange={onChange}
//                     type="password"
//                     pattern="^.{3,}$"
//                     title="mínimo de 3 caracteres"
//                     required
//                 />
//                 <button type="submit">Login</button>

//             </form>
//         </div>
//     )
// }

// export default loginForm;
