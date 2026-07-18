import React from 'react'
import "./style.scss"

export default function Table({ props }) {
    // const { data } = props;
    // const header = [ "Account Holder Name", "Account Type", "Available balance","Account Number"]
    const data = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        name: Math.random().toString(36).substring(2),
        phone: Math.floor(Math.random() * 10000000000)
    }))

    return (
        <div>
            <table className='table-main' border="1" cellPadding="8">
                <thead>
                    <tr>
                        {data && data.length > 0 &&
                            Object.keys(data[0]).map((key, i) => (
                                <th key={i}>{key}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 &&
                        data.map((row, index) => (
                            <tr key={index}>
                                {Object.keys(row).map((key, i) => (
                                    <td key={i}>{row[key]}</td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}