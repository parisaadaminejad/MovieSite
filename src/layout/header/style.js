import styled from "styled-components";


const theme ={
    gray:'#aca9a9',
    orange:'#ec7532',
    white:'#ffffff',
    black:'#000000'
}

const Style = styled.div`
#header{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    
   &.scroll {
    position: fixed;
    top:0;
    left: 0;
    background:${theme.black};
    color:${theme.white};
    transition: all .4s ease-in-out;
    
    }
    &.scroll a{
        color:${theme.white};
    }
    &.scroll .header-top{
        display:none;
    }
    
 .header-top{
    direction:rtl;
    & button{
      text-transform: uppercase;
      padding:10px 10px;
      margin-top:20px;
      border: 1px solid ${theme.gray}; 
      border-radius:20px;
      font-size:12px;
      background:none;
      a{
        color: ${theme.white};
      }
    }
}
.navbar{
    display:flex;
    justify-content: space-between;
    & .navbar-logo{
       text-transform: uppercase;
       .logo{
           font-size:30px;
           margin-right:30px;
           color:${theme.orange};
       }
       .logo-text{
           letter-spacing: 3px;
           color: ${theme.white};
       }
    }
    .navbar-menu{
        position: relative;
       
        & ul{
            display:flex;
            border-bottom:1px solid ${theme.gray};
            
            li{
                position: relative;
                margin:0;
              
               & a{
                font-size: 16px;
                font-weight: normal;
                line-height: .8em;
                display: inline-block;
                padding: 20px 24px;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: ${theme.white};
               }
            & a:hover{
                color:${theme.orange};  
            }
            }
            
            & li a::after{
                content:'';
                 position: absolute;
                 border:2px solid ${theme.orange};
                 bottom:-2px;
                 left:0;
                 right:0;
                 border-radius:50px;
                 display:block;
                 box-shadow: 0 0 20px 0 #fbbd61;
                
             }
           & li a::after {
                transition: all 0.4s ease;
                opacity: 0;
                width: 0
            }
            
           & li a:hover::after,  li a.active::after {
                opacity: 1;
                width: 100%;
            }
        }
       
    }
}

}
`;
export default Style;