import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/navbar'
import Herosec from './components/herosec'
import Topslider from './components/topslider'
import Services from './components/services'
import Bottomslider from './components/bottomslider'
import Comments from './components/comments'
import Footer from './components/footer'



const fetchData = async ()=>{
    const comingData = await fetch("https://raw.githubusercontent.com/yusif043-bit/FakeApi/refs/heads/main/bookstoreAPI.json"); 
    const data =  await comingData.json();
    return data.comments;
};

const data = await fetchData();
console.log(data);




class App extends Component{

  render(){
    return(
      <>
        <Navbar />
        <Herosec />
        <Topslider />
        <Services />
        <Bottomslider />
        <div className="container mt-5">
        <div className="row gap-4">
        {data.map((item)=>{
          
          // return <Comments img = {item.img} />;
          return(
            <Comments img = {item.img} name = {item.name} pattern = {item.pattern} comment = {item.comment} />
          );
        })}
        </div>
        </div>

        <Footer />
      </>
    )
  }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
