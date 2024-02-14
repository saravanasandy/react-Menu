import { useState } from "react";
import Title from "./title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";


 const tempCategories = data.map((item)=>item.category);
 const tempSet = new Set(tempCategories);
 const tempItems = ["All", ...tempSet];
//  console.log(tempSet);
//  console.log(tempCategories);


const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories,setCategories] = useState(tempItems);

   const filtered = (category)=>{
   console.log(category);
    if(category === "All"){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=>item.category === category);
    setMenuItems(newItems);
   }

  return <main>
    <section className="menu">
      <Title text = 'our Menu'/>
      <Categories categories={categories} filtered={filtered}/>
      <Menu items = {menuItems}/>
    </section>
  </main>;
};
export default App;
