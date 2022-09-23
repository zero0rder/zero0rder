import { useState } from 'react'

export const useModalIndex = () => {
    const [modalIndex, setModalIndex] = useState({ about: 1, projects: 2, card: 3 })

    const setIndexes = (id) => {
        let newIndexes = { ...modalIndex }

        for(const [key, value] of Object.entries(modalIndex)){
            if(id === key && value === 3) break
            if(key !== id){
                if(value === 3){
                    newIndexes[key] = 2
                } else {
                    newIndexes[key] = 1
                }
                
            } else {
                newIndexes[key] = 3
            }
        }

        setModalIndex(() => newIndexes)
    }
    
    return { modalIndex, setIndexes }
}

export default useModalIndex