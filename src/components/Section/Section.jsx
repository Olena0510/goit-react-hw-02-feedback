import PropTypes from 'prop-types';
import { Wrapper, WrapperTitle } from './Section.styled';

export const Section = ({ title, children }) => (
    <Wrapper>
        <WrapperTitle>{title}</WrapperTitle>
        {children}
    </Wrapper>
)


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}



