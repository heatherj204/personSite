import ConstructionIcon from '@mui/icons-material/Construction';
import Heading from "../components/Heading";

export default function Building(){
    return (
    <Heading primary={"Sorry this is not ready yet... Check back soon!"} secondary={<ConstructionIcon sx={{mr: 2}}/>}/>
    )
}