import React from "react"

interface PersonProps {
    names: {
        first: string,
        last: string
    }[]
}

export const Person: React.FC<PersonProps> = ({ names }) => {
    return (
        <div>
            {
                names.map((person, index) => (
                    <div>
                        {person.first}
                        {person.last}
                    </div>
                ))
            }
        </div>
    )
}