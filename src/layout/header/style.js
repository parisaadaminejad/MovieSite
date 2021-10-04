import styled from "styled-components";

const Style = styled.div`
 .heading{
     direction:rtl;
     & button{
        text-transform: uppercase;
       padding:10px 15px;
       margin:20px 60px;
       border: 1px solid #aca9a9; 
       border-radius:10px;
       font-size:12px;
     }
 }
 .navbar{
     display:flex;
     justify-content: space-between;
     margin: 0 40px;
     & .navbar-logo{
        text-transform: uppercase;
        .logo{
            font-size:30px;
            margin-right:30px;
            color:#ec7532;
        }
        .logo-text{
            letter-spacing: 3px;
        }
     }
 }
 .navbar-menu{
     border-bottom:1px solid #aca9a9;
     position: relative;
     & ul{
         display:flex;
         li{
            text-transform: uppercase;
            letter-spacing: 3px;
            line-height: 40px;
            padding: 0 25px;
         }
         &:first-child::after{
            content:'';
             position: absolute;
             border:2px solid #ec7532;
             bottom:-1px;
             left:0;
             width:98px;
             border-radius:50px;

         }
    
     }
    
 }
`;
export default Style;