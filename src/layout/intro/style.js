import styled from 'styled-components';

const theme ={
    gray:'#aca9a9',
    orange:'#ec7532',
    white:'#ffffff',
    black:'#000000'
}

const Style = styled.div`
   
    .slider{
       overflow-x: hidden;
      
       /* height: ; */
       /* position: relative; */
      
    .slider-item{
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 700px;
        background-position: center;
        background-size: cover; 
        &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);

        }
        & .slider-title{
            margin-top: 100px;
            span{
             text-transform: uppercase;
            color:${theme.orange};
            font-size: 14px;
    letter-spacing: 2px;
            }
            h1{
            font-size: 52px; 
            letter-spacing: 4px;
            color: ${theme.white};
            text-transform: capitalize;
            }
            p{
                color: ${theme.white};
                letter-spacing: 2px;
                line-height: 2;
            }
            & .slider-btn{
                display: flex;
                margin-top: 25px;
                 .circle{
                    border: 1px solid ${theme.white};
                    border-radius: 50%;
                    width: 58px;
                    height: 51px;
                    text-align: center;
                    margin-right: 8px;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 48px;
                    color: ${theme.white};
                    
                }
                .slider-link{
                    border: 1px solid ${theme.white};
                        border-radius: 30px;
                        border: 1px solid ${theme.orange};
                        text-transform: uppercase;
                        color: ${theme.white};
                        padding: 12px 24px;
                        background: ${theme.orange};
                        z-index: 9;
                    & span{
                        letter-spacing: 4px; 
                        color: ${theme.white};
                        padding-left: 10px;
                    }
     
                }
            }
          
            
        }
    }
   
}

 `;
 export default Style;
 