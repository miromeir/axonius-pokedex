import Button from './Button'
import styled from "styled-components"
import { incId, decId } from "../idSlice"
import { useDispatch } from 'react-redux'

const Button1 = styled(Button)`
    position:absolute;
    left:0px;
`

const Button2 = styled(Button)`
    position:absolute;
    left:60px;
`
function Navigation({className}){
    const dispatch = useDispatch()
    return <div className={className}>
        <Button1 onClick={()=>dispatch(decId())}/>
        <Button2 onClick={()=>dispatch(incId())}/>
    </div>
}

const StyledNavigation = styled(Navigation)`
    position:fixed;
    left:429px;
    top:452px;
`

export default StyledNavigation