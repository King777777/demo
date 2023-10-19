import React, {useState} from "react";
import { Layout, Menu } from 'antd';
import KeyMapComponent from "../KeyMapComponent";
const { SubMenu } = Menu;

const Container = props => {
  const [key, setKey] = useState("advancedReactPattern");
  const handleClick = e => {
    setKey(e.key);
  };
  return (
    <>
     <div style={{float: "left"}}>
       <Menu
           onClick={handleClick}
           style={{ width: 256 }}
           defaultSelectedKeys={[key]}
           defaultOpenKeys={['sub1']}
           mode="inline"
       >
         <SubMenu
             key="sub1"
             title={
               <span>
              <span>Hooks</span>
            </span>
             }
         >
           {
             Object.keys(KeyMapComponent).map(key => {
               return <Menu.Item key={key}>{key}</Menu.Item>
             })
           }
         </SubMenu>
       </Menu>
     </div>
      <div style={{overflow: 'hidden', backgroundColor: '#F0F0F0'}}>
        {KeyMapComponent[key]}
      </div>
        </>
  )
}

export default Container;
