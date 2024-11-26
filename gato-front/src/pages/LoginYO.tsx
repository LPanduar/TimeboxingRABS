import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "../interfaces/IUser.ts";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();

    const onSubmit: SubmitHandler<IUser> = (data) => {
        console.log(data);
        // Aquí podrías añadir la lógica de autenticación
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Ingresa tu email",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        {...register("password", { required: "Ingresa tu contraseña" })}
                    />
                    {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
                </div>

                <input type="submit" value="Iniciar Sesión" />
            </form>
        </>
    );
}

export default Login;
