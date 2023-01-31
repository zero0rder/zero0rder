import tw from 'twin.macro'

export const ContactWrap = tw.div`
    w-full
    h-full
    relative
    m-auto
    flex
    flex-wrap
    justify-center
    items-center
    flex-col
    px-4
    py-8
    md:px-8
    gap-y-8
`

export const FormWrap = tw.div`
    w-full
    sm:w-7/12
    max-w-xl
    relative
    flex
    grow
    justify-center
    items-center
    px-6
`

export const FormDivider = tw.div` 
    flex
    justify-between
    items-center
    gap-4
`

export const MainForm = tw.form`
    w-full
    flex
    flex-col
    gap-y-4
`

export const FormInput = tw.input`
    p-2
    rounded-lg
    outline-0
    border
    text-black
    font-medium
    w-full
`

export const FormTextArea = tw.textarea`
    h-48
    w-full
    p-2
    text-black
    font-medium
    resize-none
    rounded-lg
    outline-0
    border
`

export const ValidationMsg = tw.span`
    block
    pb-1
    font-medium
    text-red-600
    text-[0.85rem]
`

export const InputValidationMsg = tw(ValidationMsg)`
    absolute
    top-[-1.75rem]
`

export const FormItemContainer = tw.div`
    w-full
    relative
`

export const FormButton = tw.input`
    py-2
    px-8
    rounded-lg
    cursor-pointer
    font-medium
    border
    text-gray-900
    border-gray-900
    !bg-emerald-400
    hover:!bg-gray-900
    hover:text-emerald-300
    hover:border-emerald-300
`
export const EmailSent = tw.div`
    w-10/12
    md:w-3/4
    m-auto
    h-60
    flex
    flex-col
    items-center
    justify-center
    p-8
    gap-8
    rounded-2xl
    text-8xl
    text-emerald-300
    border
    border-emerald-300
    bg-gray-900
    shadow-lg
    shadow-emerald-300
`

export const SentText = tw.span`
    text-3xl
    text-center
`