const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum eveniet atque quam porro optio, reprehenderit amet ullam exercitationem omnis dolore. Unde voluptates optio nesciunt veniam maxime, officiis itaque reiciendis!</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Kusu</div>
                    <div>2nd September</div>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectDetails;