import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - E-Commerce Admin App`
    }, [title])
}
export default useTitle