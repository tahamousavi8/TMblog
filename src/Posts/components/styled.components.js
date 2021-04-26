import styled from 'styled-components';

export const PostListRoot=styled.div`
padding: 16px;
font-family: serif;
p,h3{
color:white;

}

.postItem{
border: 1px solid #ccc;
margin-bottom: 10px;
border-radius:5px;
padding:5px; 
box-shadow: 1px 2px 3px #ffffff; 
transition-duration: 0.4s;
}
.postItem:hover{
border: 1px solid #000000;
background: white;
p{
color: black;
}
h3{
color: black;
}
}
`;

export const PostHeaderRoot=styled.div`
background: linear-gradient(black,#971414);
margin-left: 10px;
margin-right: 10px;
padding:5px;
box-shadow: 1px 2px 3px #ffffff;
border-radius: 1px;
font-family: sans-serif;
align-items: center;
display: flex;
justify-content: space-between;

.icon{
color: black;
width: 30px;
height: 30px;
transition-duration: 0.4s;
}
.icon:hover{
color: white;
width: 35px;
height: 35px;
}


h1{
color:white;
}
`;
export const BackgroundRoot=styled.div`
background: linear-gradient(to right,black,80%,#7e0303);
   position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

export const PaginationRoot=styled.div`
color:#000000;
background: linear-gradient(to left,white,20%,black);
margin: 5px 10px;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 10px;
border-radius: 5px;
font-family: Serif;
button{
cursor: pointer;
color: white;
background: #610D0D;
border-radius: 5px;
margin: 5px ;
border-width: 0px;
box-shadow: 0px 3px 6px black;
transition-duration: 0.4s;
color: black;
}
button:hover{
background: #171616;
color: white;
}
.page{

}
`;