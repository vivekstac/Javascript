import React, { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(url);
            const data = await res.json()
            setData(data)
        } catch (err) {
            console.log(err)
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data }
}