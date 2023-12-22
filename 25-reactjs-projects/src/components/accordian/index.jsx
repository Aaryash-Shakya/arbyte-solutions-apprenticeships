import { useState } from 'react'
import data from './data'

const Accordian = () => {
    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
    }
    return (
        <>
            <div className="wrapper">
                <div className="accordian w-6/12">
                    {
                        data.map((item, index) => (
                            <div className="item mb-3 py-3 px-5 bg-yellow-700 cursor-pointer" key={index} onClick={() => handleSingleSelection(item.id)}>
                                <div className="title text-white flex justify-between items-center">
                                    <h3>{item.question}</h3>
                                    {
                                        selected == item.id ? <span>-</span> : <span>+</span>
                                    }
                                </div>
                                {
                                    selected === item.id ?
                                        <div className="content text-white h-auto">
                                            {item.answer}
                                        </div>
                                        : null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian