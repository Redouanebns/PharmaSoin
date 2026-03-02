export default function ({member}){
 return <div className="col-md-3">
    <div className="card border-0 m-5">
        <img src={member.photo} className="card-img-top" alt="img" style={{borderRadius: "100%"}} />
        <div className="card-body">
            <h4 className="card-title text-center"> {`${member.nom} ${member.prenom}`} </h4>
            <p className="card-text text-center"> {member.role} </p>
        </div>
    </div>
 </div>
}

// 