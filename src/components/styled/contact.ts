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
    h-72
    md:h-64
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
    font-bold
    border
    text-gray-200
    border-black
    !bg-black
    hover:!bg-emerald-400
    hover:text-black
`
export const EmailSent = tw.div`
    w-full
    sm:w-3/4
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
    text-black
    border
    border-gray-300
    shadow-lg
    shadow-gray-300
    bg-white
`

export const SentText = tw.span`
    text-3xl
    text-center
    font-medium
`

export const EmailSentIcon = tw.div`
    text-emerald-400
`