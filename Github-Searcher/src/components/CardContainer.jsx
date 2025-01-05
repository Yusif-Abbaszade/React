import Card from "./Card"

const CardContainer = ({userList}) => {
  return (
    <div className="container-fluid">
        <div className="row">
        {userList.map(item=>(
            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <Card key={item.id} image={item.avatar_url} username={item.login} profile_link={item.html_url}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default CardContainer