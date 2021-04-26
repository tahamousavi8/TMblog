import styled from 'styled-components';

export const DashboardRoot=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: linear-gradient(to right,black,80%,#7e0303);
`;

export const DashboardHeaderRoot=styled.div`
background: linear-gradient(black,#971414);
margin-left: 10px;
margin-right: 10px;
padding:5px;
box-shadow: 1px 2px 3px #ffffff;
border-radius: 1px;
font-family: sans-serif;
align-items: center;
display: flex;
justify-content: space-around;
color: white;
`;

export const ClickMe=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    text-decoration: none;

} 


.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    height: 100vh;
    
}
.btn{
    width: 300px;
    height: 90px;
    position: relative;
    cursor: pointer;
    transition: all .4s;
    font-style: normal;
    font-size: 1.5rem;
    color: white;
    border-radius: 10px;
}
.btn:hover{
    background: #ffffff;
    transition-delay: .8s;
    font-size: 2rem;
    color: black;
}
.d1, .d2{
    position: absolute;
    width: 100%;height: 8px;
    background: #ffffff;
    transform: scaleX(0);
    transition: all .4s;
    transition-delay: .4s;
}
.d1{
    top: 0;
    transform-origin: left;
}
.d2{
    bottom: 0;
    transform-origin: right;
}
.btn:hover .d1, .btn:hover .d2{
    transform: scaleX(1);
    transition-delay: 0s;
}
.d3, .d4{
    width: 8px;
    height: 100%;
    position: absolute;
    background: #ffffff;
    transform: scaleY(0);
    transition: all .4s;
}
.d3{
    left: 0;
    transform-origin: bottom;
}
.d4{
    right: 0;
    transform-origin: top;
}

.btn:hover .d3, .btn:hover .d4{
    transform: scaleY(1);
    transition-delay: .4s;
}
`;