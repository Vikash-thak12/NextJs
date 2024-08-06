"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/Validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datepicker",
    SELECT = "select",
    SKELETON = "skeleton"
}


// main function 
const PatientForm = () => {
    const user = "Vikash"
    const router = useRouter()
    const [isloading, setIsloading] = useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
        setIsloading(true)
        // router.push(`/patients/register`)
        try {
            const userData = {name, email, phone}
            const user = await createUser(userData)
            console.log(user);
            
            // if(user) router.push(`/patients/${user.$id}/register`)
            if(user) router.push(`/patients/register`)
        } catch (error) {
            console.log(error); 
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hi there 👋</h1>
                    <p className="text-dark-600">Schedule your Appointment.</p>
                </section>

                {/* This is for UserName */}
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name='name'
                    label="Enter Your Name"
                    placeholder="Vikash Thakur"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt='user'
                />

                {/* This is for Email */}
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name='email'
                    label="Enter Your Email"
                    placeholder="vikash@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt='email'
                />



                {/* This is for Phone */}
                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name='phone'
                    label="Enter Your Phone"
                    placeholder="(555) 124-58674"
                />


                <SubmitButton isloading={isloading} >
                    Click Here
                </SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm

