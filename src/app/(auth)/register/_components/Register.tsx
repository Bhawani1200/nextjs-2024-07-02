// import { login } from "@/api/auth";
// import { RegisterType } from "@/types/register";
// import { error } from "console";
// import { useForm } from "react-hook-form";
// export default function RegisterForm() {
//   const { register, handleSubmit, formState } = useForm<RegisterType>();
//   const { errors } = formState;
//   async function onSubmit(data: RegisterType) {
//     try {
      
//       await login(data);
//     } catch (error) {
      
//     }
//   }
//   return (
//     <form className="w-1/2 mt-10" onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-6">
//         <input
//           type="name"
//           placeholder="Your Name"
//           className="
//       w-full
//       rounded
//       py-3
//       px-[14px]
//       text-body-color text-base
//       border border-[f0f0f0]
//       outline-none
//       focus-visible:shadow-none
//       focus:border-primary
//       "
//           {...register("name", {
//             required: {
//               value: true,
//               message: "Name is required.",
//             },
//           })}
//         />
//         <p className="text-red-500 mt-2 ml-2">{errors.name?.message}</p>
//       </div>
//       <div className="mb-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           className="
//       w-full
//       rounded
//       py-3
//       px-[14px]
//       text-body-color text-base
//       border border-[f0f0f0]
//       outline-none
//       focus-visible:shadow-none
//       focus:border-primary
//       "
//           {...register("email", {
//             required: {
//               value: true,
//               message: "Email is required.",
//             },
//           })}
//         />
//         <p className="text-red-500 mt-2 ml-2">{errors.email?.message}</p>
//       </div>
//       <div className="mb-6">
//         <input
//           type="password"
//           placeholder="Password"
//           className="
//       w-full
//       rounded
//       py-3
//       px-[14px]
//       text-body-color text-base
//       border border-[f0f0f0]
//       outline-none
//       focus-visible:shadow-none
//       focus:border-primary
//       "
//           {...register("password", {
//             required: {
//               value: true,
//               message: "Password is required.",
//             },
//           })}
//         />
//         <p className="text-red-500 mt-2 ml-2">{errors.password?.message}</p>
//       </div>
//       <div className="mb-6">
//         <input
//           type="password"
//           placeholder="Confirm password"
//           className="
//       w-full
//       rounded
//       py-3
//       px-[14px]
//       text-body-color text-base
//       border border-[f0f0f0]
//       outline-none
//       focus-visible:shadow-none
//       focus:border-primary
//       "
//           {...register("confirmPassword", {
//             required: {
//               value: true,
//               message: "confirmPassword is required.",
//             },
//           })}
//         />
//         <p className="text-red-500 mt-2 ml-2">
//           {errors.confirmPassword?.message}
//         </p>
//       </div>
//       <button
//         type="submit"
//         className="
//       w-full
//       text-white
//       bg-slate-700
//       rounded
//       p-3
//       transition
//       hover:bg-opacity-90
//       "
//       >
//         Sign Up
//       </button>
//       {error ? <p className="text-red-500 mt-2 text-center">{error}</p> : null}
//     </form>
//   );
// }
