import './Filter.css'

const Filter = (props) => {

    const handleFilter = (event) => {
        props.handleFilter(event.target.value)
    }

    return (
        <form className="-container" onSubmit={props.handleSubmit}>
            <label htmlFor="filter">SORT BY:</label>
            <select className="filter" onChange={handleFilter}>
                <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
                <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
                <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
            </select>
        </form>
    )
}

export default Filter