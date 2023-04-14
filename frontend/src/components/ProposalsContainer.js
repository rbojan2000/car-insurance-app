import { useEffect } from 'react';
import Proposal from './Proposal';
import Wrapper from '../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProposals, changePage } from '../services/allProposalsSlice';
import { createProposal } from '../services/proposalSlice';
import PaginationContainer from './generic/PaginationContainer';
import { useNavigate } from 'react-router-dom'

const ProposalsContainer = () => {
  const {
    proposals,
    pageIndex,
    count,
    pageSize,

  } = useSelector((store) => store.allProposals);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProposals());
  }, [pageIndex, dispatch]);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/createProposal");
    dispatch(createProposal());
  }
  if (proposals.length === 0) {
    return (
      <Wrapper>
        <button
          type='button'
          className='add-btn'
          onClick={onClick}
        >Create New Proposal</button>
        <h2>No proposals to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={onClick}
      >Create New Proposal</button>
      <div className='objects'>
        {proposals.map((proposal) => {
          return <Proposal key={proposal.id} {...proposal} />;
        })}
      </div>
      <PaginationContainer pageIndex={pageIndex} pageSize={pageSize} count={count} changePage={changePage} />
    </Wrapper>
  );
};
export default ProposalsContainer;