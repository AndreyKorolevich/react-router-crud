function ProjectList({projects}) {
    const boxes = projects.map((elem, i) => <div key={i} className='box'><img src={elem.img} className='box-img'/></div>);
    return (
        <div className='wrapper-box'>{boxes}</div>
    );
}

export default ProjectList;
