import {useEffect} from 'react'

// custom hooks must start with the word 'use'

// this custom hook updates the document title
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle