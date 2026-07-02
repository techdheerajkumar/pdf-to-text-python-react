import { Link } from "react-router-dom";
const Header = () => {
    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: '#0f172a',
            color: '#fff',
            gap: '20px'
        },
        brand: {
            fontSize: '18px',
            fontWeight: 700
        },
        nav: {
            display: 'flex',
            gap: '12px'
        },
        link: {
            color: '#cbd5e1',
            textDecoration: 'none',
            padding: '6px 8px',
            borderRadius: '6px'
        },
        linkHover: {
            background: 'rgba(255,255,255,0.04)'
        },
        actions: {
            display: 'flex',
            gap: '8px'
        },
        button: {
            padding: '6px 10px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#fff',
            borderRadius: '6px',
            cursor: 'pointer'
        }
    }

    return (
        <header style={styles.header}>
            <div style={styles.brand}>
                <div>PDF-to-Text</div>
            </div>

            <nav style={styles.nav}>
                <ul className="d-flex mb-0">
                    <li className="d-inline-block"><Link to="/">Home</Link></li>
                    {/* <li className="d-inline-block"><a style={styles.link} href="#">Business</a></li>
                    <li className="d-inline-block"><a style={styles.link} href="#">Education</a></li>
                    <li className="d-inline-block"><a style={styles.link} href="#">Personal</a></li> */}
                </ul>      
            </nav>

            <div style={styles.actions}>
                {/* <button style={styles.button}>Profile</button>
                <button style={styles.button}>Login</button> */}
                <Link to='/login' style={styles.button}>Login</Link>
                <Link to='/register' style={styles.button}>Register</Link>
            </div>
        </header>
    )
}

export default Header;