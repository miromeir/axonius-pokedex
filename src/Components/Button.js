import styled from "styled-components"

function NavButton({className, onClick}){
    return <div className={className} onClick={onClick}>
    </div>
}

const StyledButton = styled(NavButton)`
    width:30px;
    height:30px;
    border-radius:30px;
    border: 2px solid transparent;
    // background-color:#73AD21;
    &:hover{
        cursor:pointer;
    }
    cursor:none;
`
export default StyledButton