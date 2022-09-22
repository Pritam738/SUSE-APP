import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksSubTitle,
    WorksCardContent,
    WorksCard,
    WorksCardTitle,
    WorksCardText,
    WorksCardLink
} from './card.styles';
import myData from '../../data.json';

const CreateCards = () => {
    return (
        <div>
            <WorksContent>
                <WorksContainer>
                    <WorksTitle>Out list of products and repositories mirrored on an RMT instance</WorksTitle>
                    <WorksSubTitle>Our solution private for container development on your private network</WorksSubTitle>
                    <WorksCardContent>
                    {myData.length ? myData.map((data,i) => { 
                        return <WorksCard key={i}>
                                <WorksCardTitle>{data.name}</WorksCardTitle>
                                <WorksCardText>
                                    {data.description.replace(/<(.|\n)*?>/g, '')}
                                </WorksCardText>
                                <WorksCardLink to={'product/' + data.id}>Show Details</WorksCardLink>
                            </WorksCard>}
                        ):""}
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
        </div>
    )
}

export default CreateCards;
