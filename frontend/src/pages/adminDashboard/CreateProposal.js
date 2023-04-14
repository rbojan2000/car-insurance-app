import Wrapper from "../../assets/wrappers/CreateProposalWrapper";
import StepForm from '../../components/StepForm';

const CreateProposal = () => {
    return (
        <Wrapper>
            <main className='main-container'>
                <h3 className='main-container__header'>
                   Create new Proposal
                </h3>
                <StepForm/>
            </main>
        </Wrapper>

    );
};

export default CreateProposal;