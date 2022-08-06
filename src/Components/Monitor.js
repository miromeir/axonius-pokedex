import { useGetPokemonByNameQuery } from '../Services/Api'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StaticNoise = styled.img`
clip-path: inset(15% 9% 8% 20% round 9px);
height: 181px;
width: 280px;
transform: rotate(1deg);
background-image:url("ywLgPe.gif");
`

const PokemonImage = styled.img`
position: absolute;
left: 72px;
top: 37px;
height: 121px;
width: 160px;
transform: rotate(1deg);
`

const PokemonId = styled.div`
    position: absolute;
    top: 140px;
    left: 46px;
    color: #00ff81;
    transform: rotate(1deg);
    text-align: center;
    word-break: break-all;
    width: 40px;
`
function Monitor({className}){
    const id = useSelector((state)=> state.id)
    const { data, isFetching  } = useGetPokemonByNameQuery(id)
    
    return <div className={className}>
       {
            isFetching ? <StaticNoise/> : 
                         data && <div>
                            <PokemonImage src={data.image} width="200"/>
                            <PokemonId>{data.id}</PokemonId>
                        </div>
       }
       
    </div>
}

const StyledMonitor = styled(Monitor)`
    position:fixed;
    top:186px;
    left:238px;
`

export default StyledMonitor