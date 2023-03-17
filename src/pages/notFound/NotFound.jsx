import { useNavigate } from 'react-router-dom';
import { Message } from './NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000);
  return <Message>Page not found</Message>;
};

export default NotFound;
