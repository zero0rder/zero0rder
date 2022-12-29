import tw from 'twin.macro'

export const ContactWrap = tw.div`
    w-full
    max-w-[1150px]
    min-h-[500px]
    relative
    m-auto
    flex
    flex-wrap
    justify-start
    items-center
    flex-col
    px-4
    py-8
    md:px-8
`

export const FormWrap = tw.div`
    w-full
    sm:w-7/12
    max-w-2xl
    relative
    flex
    justify-center
    items-center
`

export const MainForm = tw.form`
    w-full
    flex
    flex-col
    gap-y-4
`

export const FormInput = tw.input`
    p-2
    rounded-xl
    outline-0
    border
    text-black
    font-medium
    border-gray-200
    shadow-xl
`

export const FormTextArea = tw.textarea`
    h-48
    p-2
    text-black
    font-medium
    resize-none
    rounded-xl
    outline-0
    border-gray-200
    shadow-xl
`

export const FormButton = tw.input`
    m-auto
    py-2
    px-8
    rounded-2xl
    cursor-pointer
    font-medium
    !bg-emerald-400
    hover:!bg-emerald-300
    hover:text-violet-800
`

export const ValidationMsg = tw.span`
    font-medium
    text-red-600
`

export const SectionTitle = tw.h2`
    my-10
    text-4xl
    font-medium
    text-center
    underline
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
    bg-gradient-to-br from-violet-800 to-fuchsia-700
    shadow-xl
    shadow-emerald-300
`

export const SentText = tw.span`
    text-3xl
    text-center
`