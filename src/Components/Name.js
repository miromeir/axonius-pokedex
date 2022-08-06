import { useGetPokemonByNameQuery } from '../Services/Api'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StaticNoise = styled.img`
height: 50px;
width: 100px;
transform: rotate(1deg);
background-image:url("ywLgPe.gif");
clip-path: inset(4% 3% 3% 3% round 6px);
height: 50px;
width: 100px;
}
`

function Name({className}){
    const id = useSelector((state)=> state.id)
    const { data, isFetching  } = useGetPokemonByNameQuery(id)
    
    return <div className={className}>
       {
            isFetching ? <StaticNoise/> : 
                         data && <span style={{
                                                display:"table-cell",
                                                verticalAlign:"middle",
                                                height:"48px",
                                                width:"81px",
                                                paddingLeft:"8px",
                                                textAlign:"center"
                                               }}>
                            {`${data.name}`}
                        </span>
       }
       
    </div>
}

const StyledName = styled(Name)`
    position: fixed;
    top: 461px;
    left: 298px;
    color: #00ff81;
    overflow-y: hidden;
    overflow-x: hidden;
    -webkit-transform: rotate(1deg);
    -ms-transform: rotate(1deg);
    transform: rotate(1deg);
    text-align: center;
    word-break: break-all;
    width: 92px;
}
`

export default StyledName