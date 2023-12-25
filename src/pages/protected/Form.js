import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProfileSettings from '../../features/settings/profilesettings'
import AddUser from '../../features/settings/forms/adduser'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Users"}))
      }, [])


    return(
        <AddUser />
    )
}

export default InternalPage