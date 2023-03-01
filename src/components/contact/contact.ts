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
    pt-24
    pb-8
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
`

export const FormDivider = tw.div` 
    flex
    justify-between
    items-center
    gap-4
`

export const MainForm = tw.form`
    text-lg
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

export const FormButton = tw.button`
    py-2
    px-8
    rounded-lg
    cursor-pointer
    font-bold
    border
    text-emerald-300
    border-emerald-300
    // hover:shadow-sm
    // hover:shadow-gray-200
    hover:!bg-emerald-500
    hover:!border-emerald-500
    hover:text-gray-200
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
    border
    border-emerald-300
    shadow-lg
    shadow-emerald-300
`

export const SentText = tw.span`
    text-[2rem]
    text-center
    font-medium
    text-gray-200
`

export const EmailSentIcon = tw.div`
    text-emerald-300
`