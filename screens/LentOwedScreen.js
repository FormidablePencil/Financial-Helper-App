import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { MyListContainer } from '../styles/stylesGlobal'
import ModalComp from '../components/ModalComp'
import MyList from '../components/MyList'
import { FinancialsContext } from '../navigators/InfoNavigator'

const LentOweddScreen = ({ }) => { /* //* this is where we define what'll go into the reusable components, which making the child components highly reusable */
   const lent = useSelector(state => state.lent)
   const owed = useSelector(state => state.owed)
   const lentAndOwedSchema = { amount: '', toEntity: '', when: '', dueDate: '' }
   const { modalCueWhatList, setModalCueWhatList, setinfoNavigatorCurrentScreen } = useContext(FinancialsContext)

   useEffect(() => {
      setinfoNavigatorCurrentScreen('LentOwed')
   }, [])

   {/* //* reusable components below */ }
   return (
      <MyListContainer>
          {modalCueWhatList === 'lent' || modalCueWhatList === 'owed' ?
            <ModalComp modalCueWhatList={modalCueWhatList} inputValueSchema={lentAndOwedSchema} setModalCueWhatList={setModalCueWhatList} />
            : null
         }
         <MyList collection={lent} collectionName={'lent'} inputValueSchema={lentAndOwedSchema} />
         <MyList collection={owed} collectionName={'owed'} inputValueSchema={lentAndOwedSchema} />
      </MyListContainer>
   )
}

export default LentOweddScreen

//* functionality first and then placement and design
{/* //* the modal layout will be all the same but what'll say will be difffent depending upon  */ }