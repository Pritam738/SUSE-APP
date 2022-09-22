import {
    TableContainer,
    TableContent,
    TableTitle,
    TableSubTitle,
    TableCardContent,
    TableLink,
    TableReopBody
} from './table.styles';
import myData from '../../data.json';

const CreateTable = (props) => {
    const data = myData.filter(obj => {
        return obj.id === parseInt(props.id)
    })[0];
    return (
        <div>
            <TableContent>
                <TableContainer>
                    <TableLink to="/show-product">Back</TableLink>              
                    <TableTitle>{data.name}</TableTitle>
                    <TableSubTitle><b>Id:</b> {data.id}</TableSubTitle>
                    <TableSubTitle><b>Version:</b> {data.version}</TableSubTitle>
                    <TableSubTitle><b>RepoLink:</b> {data.eula_url}</TableSubTitle>
                    <TableSubTitle>{data.description.replace(/<(.|\n)*?>/g, '')}</TableSubTitle>
                    <TableCardContent>
                    {data.repositories.map((repo,i)=>{
                        return <TableReopBody key={i}>
                                <TableSubTitle><b>Name:</b> {repo.name}</TableSubTitle>
                                <TableSubTitle><b>RepoLink:</b> {repo.url}</TableSubTitle>
                                </TableReopBody>
                    })}
                    </TableCardContent>
                </TableContainer>
            </TableContent>
        </div>
    )
}

export default CreateTable;
