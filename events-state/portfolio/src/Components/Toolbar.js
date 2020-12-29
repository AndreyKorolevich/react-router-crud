function Toolbar({filters, selected, onSelectFilter}) {
    const buttons = filters.map((elem,i) => <button key={i} onClick={onSelectFilter}>{elem}</button>);
    return (
        <>{buttons}</>
    );
}

export default Toolbar;
