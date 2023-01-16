import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
    <Section>
        <h2>{title}</h2>
        {children}
    </Section>
)


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}