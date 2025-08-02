'use server'

import { PrevState } from "@/config/types"
import { SignInSchema } from "../schemas/auth.schema"
import { signIn } from "@auth"
import { routes } from "@/config/routes"
import { isRedirectError } from "next/dist/client/components/redirect-error"

export const signInAction = async (_: PrevState, formData: FormData) => {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const { data, success, error } = SignInSchema.safeParse({
      email,
      password,
    })

    if (!success) return { success: false, message: "Invalid Credentials" }

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      redirectTo: routes.challenge,
    })

    return {
      success: true,
      message: "Signed In Successfully!",
    }
  } catch (error) {
    console.log({ error })
    if (isRedirectError(error)) throw error
    return { success: false, message: "Invalid Credentials" }
  }
}