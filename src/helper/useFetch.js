import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setData(null)
        setError(null)

        setTimeout(() => {
            axios.get(url)
             .then(res => {
                setLoading(false)
                setData(res.data);
             })
             .catch(err => {
                setLoading(false)
                setError(true)
                setError(true);
             })
        }, 400)
    }, [])

    return { data, loading, error }
}

export default useFetch