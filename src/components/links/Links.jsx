import styles from './links.module.css'
import PropTypes from 'prop-types'

const Links = ({ href, children, className, type, target }) => {
    return (
        <a href={href} target={target} className={`${styles[type]} ${className}`}>
            {children}
        </a>
    )
}

Links.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    target: PropTypes.string
}

export default Links