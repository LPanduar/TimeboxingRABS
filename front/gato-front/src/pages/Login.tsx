import { SubmitHandler, useForm } from "react-hook-form"
import IUser from "../interfaces/IUser.ts";
function Login (){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IUser>()
    const onSubmit: SubmitHandler<IUser> = (data) => console.log(data)
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} />
            <input {...register("password", { required: true })} />
            {errors.password && <span>Ingresa contraseña</span>}
            <input type="submit" />
        </form>
        </>
    )
}

export default Login