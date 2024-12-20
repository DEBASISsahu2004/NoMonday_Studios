import styles from './links.module.css'
import PropTypes from 'prop-types'

const Links = ({ href, children, className, type }) => {
    console.log(className, type);
    return (
        <a href={href} className={`${styles[type]} ${className}`}>
            {children}
        </a>
    )
}

Links.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string
}

export default Links