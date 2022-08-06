import { useGetPokemonByNameQuery } from '../Services/Api'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const StaticNoise = styled.div`
position: absolute;
    left: -2px;
    top: 0px;
    clip-path: inset(0% 2% 0% 0% round 9px);
    height: 200%;
    width: 100%;
    background-image: url(ywLgPe.gif);
}
`

function Flavor({className}){
    const id = useSelector((state)=> state.id)
    const { data, isFetching } = useGetPokemonByNameQuery(id)
    // const dispatch = useDispatch()
    // dispatch(incId())
    
    return <div className={className}>
        {
         isFetching ? <StaticNoise/> : data && data.flavor_text
        } 
    </div>
}

const StyledFlavor = styled(Flavor)`
    position: fixed;
    top: 221px;
    left: 625px;
    color: #00ff81;
    width: 230px;
    height: 62px;
    overflow-y: hidden;
    overflow-x: hidden;
    transform: rotate(1deg);
    padding-right: 4px;
    padding-left:4px;
    text-align: left;
`

export default StyledFlavor