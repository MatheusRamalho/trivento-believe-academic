interface FormFieldErrorProps {
    message?: string
}

export const FormFieldError = ({ message }: FormFieldErrorProps) => {
    return (
        <span className="text-red-500 italic font-bold"> {message} </span>
    )
}
