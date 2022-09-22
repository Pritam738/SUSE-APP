import CreateTable from '../../components/Table';
import { useParams } from 'react-router-dom';

function RepoList() {
    const { id } = useParams();
    return (
        <div>
            <CreateTable id={id}/>
        </div>
    )
}

export default RepoList;
