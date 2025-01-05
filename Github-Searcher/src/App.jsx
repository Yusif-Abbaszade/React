import { useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import axios from "axios";
import CardContainer from "./components/CardContainer";

const App = () => {

  const [userList, setUserList] = useState([]);

  const filterData = (word)=>{
    axios.get(`https://api.github.com/search/users?q=${word}`)
    .then(res=>setUserList(res.data.items))
    .then(res=>console.log(userList))
  }
  return (
    <>
      <Header />
      <Search filterData = {filterData} />
      <CardContainer userList={userList}/>
    </>
  )
}

export default App