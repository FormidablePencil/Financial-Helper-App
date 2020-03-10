import styled from 'styled-components';

//exsc
const ModalBg = styled.View`
   background-color: 'rgba(38,	50,	56, .2)';
   flex: 1;
   justify-content:center;
   align-items: center;
`;

export const TextInput = styled.TextInput`
   background-color: gray;
`;

export const ModalCard = styled.View`
   background-color: white;
   height: 80%;
   width: 90%;
   border-radius: 10px;
`;
export const Lists = styled.View`
   flex-direction: row;
   background-color: pink;
`;
export const ItemInCollection = styled.View`
   background-color: #f2f0ee;
   flex:1;
   align-items: center;
`;

export const MyListContainer = styled.View`
   flex-direction: row;
   flex: 1;
   justify-content: space-around;
   background-color: lightgray;
   width: 100%;
`;
export const IndividualItem = styled.View`
  background-color: white;
  width: 80%;
  border-radius: 7px;
  elevation: 5;
  margin: 20px 0px 20px 0px;
`;
export const Col = styled.View`
  flex-direction: row;
`;
export const TitleContainer = styled.View`
  background-color: rgb(25,	118,	210);
  width: 200px;
  height: 60px;
  justify-content:center;
  align-items:center;
`;
export const Title = styled.Text`
  color: white;
  font-size: 23px;
`;
export default ModalBg;