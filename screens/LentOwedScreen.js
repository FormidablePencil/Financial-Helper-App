import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Lists } from '../styles/stylesGlobal'
import ModalComp from '../components/ModalComp'
import MyList from '../components/MyList'
import { FinancialsContext } from '../navigators/InfoNavigator'

const LentBorroweddScreen = ({ }) => {
   const lent = useSelector(state => state.lent)
   const owed = useSelector(state => state.owed)
   const { modalCue, setinfoNavigatorCurrentScreen } = useContext(FinancialsContext)
   console.log(lent, owed)
   useEffect(() => {
      setinfoNavigatorCurrentScreen('oweAndLent')
   }, [])
   return (
      <View>
         <ModalComp modalCue={modalCue} />
         <Lists>
            <MyList list={lent} listName={'lent'} />
            <MyList list={owed} listName={'owed'} />
         </Lists>
      </View>
   )
}

export default LentBorroweddScreen

//* functionality first and then placement and design
//* redux for the complexity of using a calendar
{/* //~ the modal layout will be all the same but what'll say will be difffent depending upon  */ }