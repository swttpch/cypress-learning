import NavItem from "./NavItem"

const navItems = [
    {
        label: 'Why Cypress?',
        path: '/',
        'data-test': 'nav-why-cypress'
    },
    {
        label: 'Overview',
        path: '/overview',
        'data-test': 'nav-overview'
    },
    {
        label: 'Fundamentals',
        path: '/fundamentals',
        'data-test': 'nav-fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        'data-test': 'nav-forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        'data-test': 'nav-examples'
    },
    {
        label: 'Component',
        path: '/component',
        'data-test': 'nav-component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        'data-test': 'nav-best-practices'
    },
]

export default function NavBar() {
    return (
        <ul className="nav-bar">
            {
                navItems.map((item) => (
                    <NavItem key={item.label} label={item.label} path={item.path} dataTest={item["data-test"]} />
                ))
            }
        </ul>
    )
}